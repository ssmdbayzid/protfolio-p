import { motion } from 'framer-motion'
import React from 'react'

const Testimonial = () => {
    const testimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end pt-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`
  return (
    <section id="testimonial" className="pt-16 pb-16">
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.5}}
      transition={{duration: 0.5}}
      variants={{
        hidden:{opacity: 0, scale: 0.2},
        visible:{opacity: 1, scale: 1}
      }}
      className="md:w-1/3 text-center md:text-left">
        <p className="text-4xl font-playFair font-semibold mb-5 text-red">TESTIMONIAL</p>

        <p className="text-md" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quae? Delectus officiis id earum cupiditate.</p>     
        
        </motion.div>
        <div className="md:flex md:justify-between mt-16 gap-8">
        <motion.div className={`bg-blue ${testimonialStyles} before:content-person1 p-6`}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount: 0.5}}
        transition={{duration: 0.5}}
        variants={{
          hidden: {opacity: 0, scale: 0.8},
          visible: {opacity: 1, scale: 1}
        }}
        >
          <p className="text-6xl font-playFair">"</p>
          <p className="text-lg text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia natus exercitationem maxime ad ex asperiores?</p>

        </motion.div>
        <motion.div className={`bg-red ${testimonialStyles} before:content-person2 p-6`}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount: 0.5}}
        transition={{delay:0.2, duration: 0.5}}
        variants={{
          hidden: {opacity: 0, scale: 0.8},
          visible: {opacity: 1, scale: 1}
        }}
        >
          <p className="text-6xl font-playFair">"</p>
          <p className="text-lg text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia natus exercitationem maxime ad ex asperiores?</p>

        </motion.div>
        <motion.div className={`bg-yellow ${testimonialStyles} before:content-person3 p-6`}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount: 0.5}}
        transition={{delay:0.4, duration: 0.5}}
        variants={{
          hidden: {opacity: 0, scale: 0.8},
          visible: {opacity: 1, scale: 1}
        }}
        >
          <p className="text-6xl font-playFair">"</p>
          <p className="text-lg text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia natus exercitationem maxime ad ex asperiores?</p>

        </motion.div>
        </div>

    </section>
  )
}

export default Testimonial
