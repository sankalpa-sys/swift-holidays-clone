import Head from 'next/head'
import React, {useEffect, useRef, useState} from 'react'
import MainSection from '../components/MainSection'
import {useRouter} from 'next/router'
import Image from 'next/image'
import {busData} from '../data/busData'
import {motion} from "framer-motion"
import {ServerIcon} from "@heroicons/react/24/solid"
import toast, {Toaster} from "react-hot-toast";

function AvailableBuses() {
    const busesAndSeats = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("seatsAndBuses")) : []
    const targetDivRef = useRef(null);
    const [selectedBus, setselectedBus] = useState("")
    const [selectedSeats, setSelectedSeats] = useState([])
    const [bookedBuses, setBookedBuses] = useState([])
    const [bookedSeats, setBookedSeats] = useState([])
    const scrollToTargetDiv = () => {
        if (targetDivRef.current) {
            targetDivRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    useEffect(()=>{
        scrollToTargetDiv();
    },[])

    const getBookedBusesAndSeats = () => {
        const booked_buses = busesAndSeats?.map((bus)=>{
            return bus.bus_id
        })
        setBookedBuses(booked_buses)

        const booked_seats = busesAndSeats?.map((item)=>{
            if(item?.bus_id === selectedBus){
                return item.booked_seats
            }
        })

        console.log("booked_seats", booked_seats)
        setBookedSeats(booked_seats)
    }

    useEffect(() => {
        getBookedBusesAndSeats()
    }, [selectedBus])


    console.log("selectedBus", selectedBus)
    console.log("booked_buses", bookedBuses)
    console.log("booked_seats", bookedSeats)

    const router = useRouter()
    const searchData = router?.query

    const specificBusClickHandler = (bus) => {
        if (selectedBus === bus.id) {
            setselectedBus("")
        } else {
            setselectedBus(bus.id)
            setSelectedSeats([])
        }
    }

    const selectSeatsHandler = (seat, bus_id, index) => {
        if(bookedBuses?.includes(bus_id) && bookedSeats[0]?.includes(seat)){
            toast.error("Already Booked the bus",{id: "already_booked"})
            return
        }
        else{
            if (!selectedSeats.includes(seat)) {
                setSelectedSeats([...selectedSeats, seat])
            } else {
                const newSeats = selectedSeats.filter((item) => {
                    return item !== seat
                })
                setSelectedSeats(newSeats)
            }
        }
    }
    const bookSeatsHandler = (id) => {
        if(bookedBuses?.includes(id)){
            toast.error("Already Booked", {id: "already_booked"})
            return
        }else{
            if (busesAndSeats?.length < 1 || !busesAndSeats) {
                localStorage.setItem("seatsAndBuses", JSON.stringify([{
                    bus_id: id,
                    booked_seats: selectedSeats
                }]))
            } else {
                let newData = busesAndSeats.concat({
                    bus_id: id,
                    booked_seats: selectedSeats
                })
                localStorage.setItem("seatsAndBuses", JSON.stringify(newData))
            }
        }

    }

    const getColor = (seat, bus_id, index) => {
       console.log("bookedSeats", bookedSeats)
        if(selectedSeats.includes(seat)){
            return "#db2777"
        }else if(bookedBuses?.includes(bus_id) && bookedSeats[index]?.includes(seat)){
            return "#dc2626"
        }else{
            return "#16a34a"
        }
    }
    return (
        <main>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Head>
                <title>Available Buses</title>
            </Head>

            <MainSection showForm={false}/>

            <h1 ref={targetDivRef} className='my-10 ml-10 text-2xl font-bold pt-5'>Available Buses</h1>

            <motion.div initial={{opacity: 0.5, y: 200}} animate={{opacity: 1, y: 0}} transition={{duration: 1}}
                        className='px-10'>
                {busData.map((bus, index) => (
                    <div key={bus.id} className='mb-10'>
                        <div onClick={() => specificBusClickHandler(bus)} key={bus.name}
                             className='flex items-center justify-between px-10  border py-6 rounded-md shadow-md cursor-pointer hover:bg-gray-50 hover:opacity-90 transition-all duration-300 ease-out select-none'>
                            <div className='flex items-center space-x-8'>
                                <Image height={150} width={150} className='rounded-md' src={bus.image}/>
                                <div>
                                    <p className='font-bold text-lg'>{bus.name}</p>
                                    <p className='underline font-semibold'>{searchData?.from_city} - {searchData?.to_city}</p>
                                </div>
                            </div>
                            <h1 className='font-bold'>{bus.category}</h1>
                            <h1 className='font-bold'>{bus.time}</h1>
                            <div className='font-bold space-y-1 '>
                                <p>Total Seats: {bus.total_seats}</p>
                                <p>Available Seats: {bus.available_seats}</p>
                            </div>
                            <p className='font-bold'>Fare: Rs. {bus.fare}</p>
                        </div>
                        {(selectedBus === bus.id) && (
                            <motion.div initial={{opacity: 0, y: -10}}
                                        animate={{opacity: 1, y: 0}}
                                        exit={{opacity: 0, y: -10}}
                                        transition={{duration: 0.5}}
                                        className='w-full h-auto bg-gray-100 rounded-md mt-2 px-8 py-8 flex justify-between select-none'>
                                <div>
                                    <div className='space-y-6'>
                                        <div className='flex space-x-14 '>
                                            {[3, 6, 9, 12, 15, 18, 21, 24, 27, 30].map((seat) => (
                                                <div key={seat} className='space-y-4'>
                                                    <div>
                                                        <p className='ml-2 font-bold'>{seat}</p>
                                                                <ServerIcon style={{color:getColor(seat, bus.id, index)}} onClick={() => selectSeatsHandler(seat, bus.id, index)}
                                                                                    className={`h-8 w-8  cursor-pointer`}/>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='flex space-x-14'>
                                            {[2, 5, 8, 11, 14, 17, 20, 23, 26, 29].map((seat) => (
                                                <div key={seat} className='space-y-4'>
                                                    <div>
                                                        <p className='ml-2 font-bold'>{seat}</p>
                                                        <ServerIcon style={{color:getColor(seat, bus.id, index)}} onClick={() => selectSeatsHandler(seat,bus.id, index)}
                                                                    className={`h-8 w-8  cursor-pointer`}/>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='flex space-x-14 mt-24'>
                                        {[1, 4, 7, 10, 13, 19, 22, 25, 28, 31].map((seat) => (
                                            <div key={seat} className='space-y-4'>
                                                <div>
                                                    <p className='ml-2 font-bold'>{seat}</p>
                                                    <ServerIcon style={{color:getColor(seat, bus.id, index)}} onClick={() => selectSeatsHandler(seat, bus.id, index)}
                                                                className={`h-8 w-8  cursor-pointer`}/>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p className='text-gray-700  mb-3'>Selected Seats:</p>
                                    <div className='flex items-center space-x-3 flex-wrap'>
                                        {selectedSeats.map((item) => (
                                            <p className='text-sm font-bold' key={item}>{item + " "}</p>
                                        ))}
                                    </div>

                                    <button onClick={() => bookSeatsHandler(bus.id)}
                                            disabled={selectedSeats.length === 0}
                                            className='bg-red-600 text-white font-black text-sm px-4 py-2 mt-4 rounded-md disabled:bg-red-300'>Book
                                        seats
                                    </button>
                                </div>


                            </motion.div>
                        )}
                    </div>
                ))}
            </motion.div>
        </main>
    )
}

export default AvailableBuses