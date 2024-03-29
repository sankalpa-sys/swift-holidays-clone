import Image from "next/image";
import React from "react";
import {motion} from 'framer-motion'

function About() {
  return (
    <main className="max-w-6xl mx-auto md:my-56 mt-72 mb-32 flex md:flex-row flex-col space-y-8 px-6 md:space-x-16">
      <section className="flex flex-col md:space-y-10 space-y-5 md:w-1/2 w-full mt-4">
        <h1 className="font-semibold text-lg text-sky-900 ">About Swift</h1>
        <p className="text-gray-600 tracking-wider font-light">
          Swift Holidays is a leading travel service provider with tailored
          packages, and itineraries for groups and individuals catering to their
          needs and preferences. We provide our clients with an opportunity to
          see Nepal beyond the magnificent himalayas and picturesque landscapes.
          Our in-house vehicle service has a fleet of more than 45 vehicles that
          provide a comfortable experience to explore different sides of Nepal
          while indulging travelers in Nepali culture, history, religion, and
          heritage up close. Travelers safety and comfort is our first priority.
          We take extra care of our travelers by accommodating their travel
          needs through our wide range of vehicles for regular and off-road
          travel for any group size.
        </p>

        <button className="bg-sky-900 hover:bg-teal-900 transition-all duration-300 ease-out hover:-translate-y-1 text-gray-100 rounded-full py-2 px-6 max-w-fit">More About Us</button>
      </section>


      <motion.div initial={{x: 100, opacity: 0}} viewport={{once: true}} whileInView={{x:0, opacity:1, transition:{type:"spring", stiffness: 200}}} className="h-[500px] md:w-[400px] w-full relative rounded-lg">
        <Image src={"https://images.unsplash.com/photo-1562620669-98104534c6cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"} className="object-cover rounded-lg" layout="fill" alt=""/>
      </motion.div>
    </main>
  );
}

export default About;
