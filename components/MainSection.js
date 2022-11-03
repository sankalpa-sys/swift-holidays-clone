import { PlayCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Header from "./Header";
import { motion } from "framer-motion"
import ReactPlayer from "react-player";
import BookingForm from "./BookingForm";

function MainSection() {
    const [showPlayer, setShowPlayer] = useState(false)

  return (
<>
<div  className="bg-[url('https://images.pexels.com/photos/1178448/pexels-photo-1178448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] md:h-[108vh] h-screen bg-no-repeat bg-cover relative z-30">
      <div className={`absolute w-full left-0 pt-10 top-0 h-screen md:h-[108vh] z-40 ${showPlayer?"bg-black/90":"bg-black/60"} px-5 md:px-0`} >
        <Header showPlayer={showPlayer} />

        <section className="flex flex-col items-start justify-end  pr-12  md:w-1/2 w-full h-[60vh]  ml-auto space-y-5">
          <motion.h1 initial={{opacity:0, y:200}} animate={{opacity:1, y:0}} transition={{duration:1.5}} className={`text-white ${showPlayer?"invisible":"visible"} md:text-6xl text-5xl  font-bold tracking-widest`}>
            We Have The Best Tourist Bus Service In Nepal
          </motion.h1>
          <motion.p initial={{opacity:0, y:-200}} animate={{opacity:1, y:0}} transition={{duration:1.5}}  className={`text-white ${showPlayer?"invisible":"visible"} font-light text-[16px]`}>
            Our company specializes in several different services like city
            tours, trekking, peak climbing, adventure sports, sightseeing,
            mountain flights, jungle safari, and cultural tours.
          </motion.p>

          <motion.div onClick={()=>setShowPlayer(true)} initial={{opacity:0, x:200}} animate={{opacity:1, x:0}} transition={{duration:1.5}} className={`flex ${showPlayer?"invisible":"visible"} items-center space-x-2 cursor-pointer group pl-2 shadow-lg shadow-white/20 pr-10 rounded-full py-1 relative`} >
            <PlayCircleIcon className="h-16 w-16 group-hover:animate-pulse text-white " />
            <div className="border h-10 w-10 absolute rounded-full animate-ping left-3"/>
            <p className={`text-white  font-semibold `}>Watch Video</p>
          </motion.div>

         {showPlayer && (
             <motion.div  initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{duration:1.5}} className="absolute md:left-56 z-50 md:top-24 top-48 h-[350px] overflow-hidden md:h-[500px] w-[93%] mx-auto  md:w-[1000px]">
             <ReactPlayer height={'100%'} className="relative" width="100%" controls={true}  url='https://www.youtube.com/watch?v=TW9uj83Vq-0' />
             <XMarkIcon onClick={()=>setShowPlayer(false)} className="h-6 w-6 absolute right-1 cursor-pointer text-white z-50 top-1"/>
             </motion.div>
         )}
        </section>
      </div>
    </div>
    <BookingForm/>
    </>
  );
}

export default MainSection;
