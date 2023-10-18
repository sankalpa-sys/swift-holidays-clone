import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { useRouter } from 'next/router'
import toast, { Toaster } from 'react-hot-toast';


function BookingForm() {
    const [searchStates, setSearchStates] = useState({
        from_city: "",
        to_city: "",
        departure_date: "",
        returning_date: ""
    })
    const router = useRouter()
    const changeHandler = (e) => {
        setSearchStates({
            ...searchStates,
            [e.target.name]: e.target.value
        })
    
    }
    const searchHandler = () => {
        const allKeysEmpty = Object.values(searchStates).every(value=>value==="")
       if(allKeysEmpty) {
        toast.error("Please select at least one field", {id: "one_field"})
        return
       }

       if(searchStates.from_city && !searchStates.to_city){
        toast.error("Please select your departure location",{id: "to_city"})
        return
       }
       if(!searchStates.from_city && searchStates.to_city){
        toast.error("Please select your arrival location",{id: "from_city"})
        return
       }
       if(!searchStates.departure_date){
        toast.error("Please select a date",{id: "date"})
        return
       }

       if(searchStates.from_city === searchStates.to_city){
        toast.error("Please select different locations",{id: "same_city"})
        return
       }

        router.push({
            pathname: "/availableBuses",
            query: searchStates
        })
    }
    console.log(searchStates)
  return (
    
    <motion.div initial={{y:100, opacity:0}} viewport={{once:true}} whileInView={{y:0, opacity:1}} transition={{duration:1}} className='bg-gray-200 my-10 border md:max-w-6xl w-[95%] mx-auto absolute md:-bottom-60 md:left-48 left-2 z-50 rounded-lg shadow-xl -bottom-[280px] '>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
        <section className='flex items-center md:space-x-4 space-y-2 w-full flex-col md:flex-row md:px-12 px-3 pt-8 py-4'>
            <div className='flex flex-col md:w-1/4 w-full space-y-2'>
                <p className='text-gray-500 '>From:</p>
                <select onChange={changeHandler} className='px-10 py-2 rounded-lg outline-none' name="from_city" id="from_city">
                <option  value="">Enter a city</option>
                    <option value="Kathmandu">Kathmandu</option>
                    <option value="Chitwan">Chitwan</option>
                    <option value="Pokhara">Pokhara</option>
                </select>
            </div>
            <div className='flex flex-col md:w-1/4 w-full space-y-2'>
                <p className='text-gray-500 '>To:</p>
                <select onChange={changeHandler} className='px-10 py-2 rounded-lg outline-none' name="to_city" id="to_city">
                    <option  value="">Enter a city</option>
                    <option value="Kathmandu">Kathmandu</option>
                    <option value="Chitwan">Chitwan</option>
                    <option value="Pokhara">Pokhara</option>
                </select>
            </div>
            <div className='flex flex-col md:w-1/4 w-full space-y-2'>
                <p className='text-gray-500 '>Date:</p>
                <input onChange={changeHandler} className='px-10 py-2 rounded-lg outline-none' type="date" id="departure_date" name="departure_date"/>
            </div>
            <div className='flex flex-col md:w-1/4 w-full space-y-2'>
                <p className='text-gray-500 '>Returning Date (optional):</p>
                <input onChange={changeHandler} className='px-10 py-2 rounded-lg outline-none' type="date" id="returning_date" name="returning_date"/>
            </div>
        </section>
        <button onClick={searchHandler} className='w-full mx-auto bg-sky-900 text-white rounded-b-lg  py-2'>Search</button>
    </motion.div>
  )
}

export default BookingForm