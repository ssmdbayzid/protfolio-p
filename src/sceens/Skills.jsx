import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import skillImg from '../assets/skills-image.png'

const Skills = () => {
    const isAboveMediumScreen = useMediaQuery("(min-width: 768px)")
  return (
    <section className="pt-10 pb-24 md:mt-48">
      <div className="md:flex md:justify-between md:gap-16 ">
        <motion.div className="md:w-1/3"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount: 0.5}}
        transition={{duration: 0.5}}
        variants={{
            hidden:{opacity: 0, x: -50},
            visible: {opacity: 1, x: 0}
        }}
        >
            <div className="text-4xl font-playFair font-semibold">
            MY <span className="text-red">SKILLS</span> 
            </div>
            <p className="text-md mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veniam.
            </p>
        </motion.div>

        {/* IMAGE SECTION   */}
        <div className="mt-16 md:mt-0">

        {isAboveMediumScreen ? (
        <div className="relative z-0 ml-20 before:absolute before:border-2 before:border-blue before:w-full before:h-full before:-left-10 before:-top-10 before:z-[-1]">
            <img
            className="z-10"
            src={skillImg} alt="skill-image" />
        </div>)
        :
        (<img
            className="z-10"
            src={skillImg} alt="skill-image" />) }
        </div>

      </div>

      {/* INNOVATION  */}
      <div className="md:flex md:justify-between md:mt-16 mt-32 gap-16">
        <motion.div
        className="md:w-1/3 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount: 0.5}}
        transition={{duration: 0.5}}
        variants={{
            hidden:{opacity: 0, y: 50},
            visible: {opacity: 1, y: 0} 
        }}        
        >
        <div className="relative h-32">
            <div className="z-10">
                <p className="text-6xl font-playFair font-semibold">01</p>
                <p className="text-3xl font-playFair font-semibold">Experience</p>
            </div>
            <div className="w-1/2 md:w-2/3 bg-red absolute top-0 right-0 h-32 z-[-1]" />
            <p className="z-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto beatae eum, dolores quae deleniti ipsam maxime dolorum ad laborum. Esse officia dicta magni voluptas corporis.</p>
        </div>
        </motion.div>
        <motion.div
        className="md:w-1/3  mt-32 md:mt-10 "
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount: 0.5}}
        transition={{delay: 0.2, duration: 0.5}}
        variants={{
            hidden:{opacity: 0, y: 50},
            visible: {opacity: 1, y: 0} 
        }}        
        >
        <div className="relative h-32">
            <div className="z-10">
                <p className="text-6xl font-playFair font-semibold">02</p>
                <p className="text-3xl font-playFair font-semibold">Innovative</p>
            </div>
            <div className="w-1/2 md:w-2/3 bg-blue absolute top-0 right-0 h-32 z-[-1]" />
            <p className="z-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto beatae eum, dolores quae deleniti ipsam maxime dolorum ad laborum. Esse officia dicta magni voluptas corporis.</p>
        </div>
        </motion.div>
        <motion.div
        className="md:w-1/3 mt-32 md:mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount: 0.5}}
        transition={{delay: 0.2, duration: 0.5}}
        variants={{
            hidden:{opacity: 0, y: 50},
            visible: {opacity: 1, y: 0} 
        }}        
        >
        <div className="relative h-32">
            <div className="z-10">
                <p className="text-6xl font-playFair font-semibold">03</p>
                <p className="text-3xl font-playFair font-semibold">Imaganative</p>
            </div>
            <div className="w-1/2 md:w-2/3 bg-yellow absolute top-0 right-0 h-32 z-[-1]" />
            <p className="z-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto beatae eum, dolores quae deleniti ipsam maxime dolorum ad laborum. Esse officia dicta magni voluptas corporis.</p>
        </div>
        </motion.div>
    </div>      
    </section>
  )
}

export default Skills
