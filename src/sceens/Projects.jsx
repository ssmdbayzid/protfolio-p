import { motion } from 'framer-motion'
import React, { useState } from 'react'
import projectsData from '../data/ProjectData'


const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
} 

const projectVariants = {
  hidden: {opacity: 0, scale: 0.8},
  visible: {opacity: 1, scale: 1}
}

if(projectsData){
  console.log(projectsData)
}

const Projects = () => {
  return (
    <section id="projcts" className="pt-10 md:pt-24 pb-10">
      <motion.div
      className="md:w-1/2 mx-auto text-center mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amouunt : 0.5}}
      transition={{duration: 0.5}}
      variants={{
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0}
      }}
      >
      <p className="text-4xl font-playFair font-semibold">PRO{""} <span className=" text-red">JECT</span></p>
      <p className="mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora commodi repudiandae quisquam distinctio sit maiores?
      </p>
      </motion.div>
       
       {/* Projects  */}

      <div className="flex justify-center">
      
       <motion.div
       className="sm:grid sm:grid-cols-3 mx-auto"
       initial="hidden"
       whileInView="visible"
       viewport={{once: 1, amount: 0.5}}
       variants={container}
       >
        <div className="flex justify-center items-center bg-red text-center p-10 max-w-[400px] max-h-[400px] font-playFair font-semibold text-2xl">
        BEAUTIFUL USER INTERFACES
        </div>
        
        
        {projectsData && projectsData.map((data, index)=>
         <motion.div key={index} variants={projectVariants} className="relative group overflow-hidden">
          <div className="absolute opacity-0 h-full w-full p-10  items-center group-hover:opacity-90 bottom-[-100%] group-hover:bottom-0 transitionon duration-500 z-30 flex flex-col justify-center bg-deep-blue">
            <p className="text-4xl text-yellow font-semibold">{data.name}</p>
            <p className="text-md mt-10 text-center">
              {data.description}
            </p>
          </div>
          <img src={data.img} alt="" />
          
        </motion.div>)}
        <div className="flex justify-center items-center bg-blue text-center p-10 max-w-[400px] max-h-[400px] font-playFair font-semibold text-2xl">
        SMOOTH USER EXPERIENCE
        </div>
       </motion.div>
       </div>
    </section>
  )
}

export default Projects