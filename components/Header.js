import Image from "next/image";
import React from "react";
import {ChevronDownIcon, PhoneIcon, Bars3Icon} from "@heroicons/react/24/outline";
import {motion} from 'framer-motion'

function Header({showPlayer}) {
  return (
    <motion.header initial={{opacity: 0, y: 50}} animate={{opacity:1, y: 0}} transition={{duration: 1}} className={`h-[90px] ${showPlayer?"invisible":"visible"} md:max-w-6xl max-w-screen bg-gray-200 z-50 mx-auto rounded-lg flex items-center justify-between pl-4 shadow-md bg-blend-hue pr-3 md:pr-0`} >
      <Image
        src={"https://swiftholidays.com.np/images/logo.png"}
        className="object-contain py-3 "
        height={190}
        width={170}
        alt=""
      />


      <div className= "md:flex hidden space-x-7 font-[340] text-gray-900 text-[15px]">
        <p className="cursor-pointer">Home</p>
       <div className="flex items-center space-x-1 cursor-pointer">
       <p className="cursor-pointer">Company Profile</p>
       <ChevronDownIcon className="h-4 w-4"/>
       </div>
        <p className="cursor-pointer">Services</p>
        <div className="flex items-center space-x-1 cursor-pointer">
       <p className="cursor-pointer">Our Bus</p>
       <ChevronDownIcon className="h-4 w-4"/>
       </div>
        <p className="cursor-pointer">Contact Us</p>
      </div>

<div className="bg-sky-900 z-10 text-white h-full rounded-r-lg px-5 hidden md:flex flex-col items-center justify-center space-y-1 relative ">
    <h1 className="text-lg font-semibold">Contact Us Now</h1>
   <p className="text-xs font-light"> +977-9851191095</p>


   <div className="bg-sky-900 z-20 rounded-full p-2 absolute -left-6">
    <PhoneIcon className="h-6 w-6 "/>
   </div>
</div>

<Bars3Icon className="h-10 w-10 md:hidden cursor-pointer hover:opacity-80 "/>



    </motion.header>
  );
}

export default Header;
