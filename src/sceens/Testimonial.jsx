import { motion } from 'framer-motion'
import React from 'react'

const Testimonial = () => {
    const testimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end pt-16 mt-48 before:absolute before:-ml-[110px] before:top-[-120px] before:left-1/2`
  return (
    <section id="testimonial" className="pt-32 pb-16">
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

        <p className="text-md " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quae? Delectus officiis id earum cupiditate.</p>     
        
        </motion.div>
    </section>
  )
}

export default Testimonial
