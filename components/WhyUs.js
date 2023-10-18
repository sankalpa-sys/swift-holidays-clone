import Image from "next/image";
import React from "react";
import {CheckBadgeIcon} from '@heroicons/react/24/solid'
import {motion} from 'framer-motion'

const services = [
    "100% client satisfaction",
    "Quality services",
    "We strictly abide by safety and security procedures.",
    "We care, respect, and protect our environment."
]

const variants = {
    visible: {
        opacity: 1,
        x: 0,
        transition: {staggerChildren: 0.2}
    },
    hidden: {
        opacity: 0,
        x: 40
    }
}


function WhyUs() {
  return (
    <main className="h-auto md:max-w-6xl md:flex md:space-x-12 w-[90%] mx-auto mb-10">
      <motion.div initial={{x: -100, opacity: 0}} viewport={{once: true}} whileInView={{x:0, opacity:1, transition:{type:"spring", stiffness: 200}}} className="h-72 md:h-[500px] md:w-[400px] rounded-lg relative ">
        <Image
          src={
            "https://images.pexels.com/photos/2045249/pexels-photo-2045249.jpeg?auto=compress&cs=tinysrgb&w=800"
          }
          fill
          className="object-cover object-bottom rounded-lg"
        />
      </motion.div>

      <section className="px-2 pt-4  md:w-1/2 tracking-wider font-light  text-gray-600">
        <h1 className="font-semibold text-xl my-4 md:my-8 text-gray-900">Why Us & What we stand for</h1>
        <p>Swift Travel and Trek are a government-registered Nepalese Trekking Company responsible for trekking, tour, and adventure holidays in Nepal. Our wide range of holiday packages of different kinds is curated by experts with utmost care and thinking so that it is ideal and comfortable for our clients. Also, we specialize in tailor-made itineraries. Our professional team of leaders, guides, porters, and staff specializes in the field of trekking, climbing, and other activities we provide for our clients.</p>
        <p className="my-3 md:my-6 ml-1 font-semibold">We Believe:</p>
          <motion.div initial='hidden' whileInView="visible" variants={variants} className="space-y-1">
              {services.map((item, index) => (
                  <motion.div
                      key={item}
                      className="flex items-center space-x-2"
                      variants={variants}
                  >
                      <CheckBadgeIcon className="h-6 w-6 text-green-500" />
                      <p className="text-sm">{item}</p>
                  </motion.div>
              ))}
          </motion.div>
      </section>
    </main>
  );
}

export default WhyUs;
