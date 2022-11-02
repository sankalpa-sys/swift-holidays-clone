import React from 'react'
import {motion} from 'framer-motion'

function BookingForm() {
  return (
    <motion.div initial={{y:500, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1.5}} className='bg-gray-200 my-10  border  md:max-w-6xl w-[95%] mx-auto absolute md:-bottom-48 md:left-48 left-2 z-50 rounded-lg shadow-xl -bottom-[280px] '>
        <section className='flex items-center md:space-x-4 space-y-2 w-full flex-col md:flex-row md:px-12 px-3 pt-8 py-8'>
            <div className='flex flex-col md:w-1/4 w-full space-y-2'>
                <p className='text-gray-500 '>From:</p>
                <select className='px-10 py-2 rounded-lg' name="from" id="from">
                    <option value="">Enter a city</option>
                    <option value="ktm">Kathmandu</option>
                    <option value="cht">Chitwan</option>
                    <option value="pkr">Pokhara</option>
                </select>
            </div>
            <div className='flex flex-col md:w-1/4 w-full space-y-2'>
                <p className='text-gray-500 '>To:</p>
                <select className='px-10 py-2 rounded-lg' name="from" id="from">
                    <option value="">Enter a city</option>
                    <option value="ktm">Kathmandu</option>
                    <option value="cht">Chitwan</option>
                    <option value="pkr">Pokhara</option>
                </select>
            </div>
            <div className='flex flex-col md:w-1/4 w-full space-y-2'>
                <p className='text-gray-500 '>Date:</p>
                <input className='px-10 py-2 rounded-lg' type="date" id="date" name="date"/>
            </div>
            <div className='flex flex-col md:w-1/4 w-full space-y-2'>
                <p className='text-gray-500 '>Returning Date (optional):</p>
                <input className='px-10 py-2 rounded-lg' type="date" id="returning" name="returning"/>
            </div>
        </section>
        <button className='w-full bg-sky-900 text-white rounded-b-lg  py-2'>Search</button>
    </motion.div>
  )
}

export default BookingForm