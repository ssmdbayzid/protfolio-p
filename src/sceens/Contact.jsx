import { motion } from 'framer-motion'
import React from 'react'
import { useForm } from 'react-hook-form'
import contactImg from '../assets/contact-image.jpeg'



const Contact = () => {
    const {register, trigger, formState:{errors}} = useForm()

    const onSubmit = async (e) => {
        const isValid = await trigger()
        if(!isValid){
            e.preventDefault()
        }
    }
  return (
    <div className="pt-10 mt-10">
        <motion.div
        className="md:flex text-center md:justify-end mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount: 0.5}}
        transition={{duration: 0.5}}
        variants={{
            hidden: {opacity: 0, y: 50},
            visible:{opacity: 1, y:0}
        }}
        >
        
            <p className="text-4xl font-playFair my-5 font-semibold">
               <span className="text-red">CONTACT ME</span> TO GET STARTED
            </p>
        </motion.div>

        {/* Contact Form  */}
      <div className="md:flex justify-center my-10 gap-10">
      <motion.div
        className="basis-1/2 md:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount: 0.5}}
        transition={{duration: 0.5}}
        variants={{
            hidden: {opacity: 0, y: 50},
            visible:{opacity: 1, y:0}
        }}
        >       
            <img src={contactImg} alt="" />
        </motion.div>
        <motion.div
        className="basis-1/2 mt-10 md:mt-0 "
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount: 0.5}}
        transition={{delay: 0.2, duration: 0.5}}
        variants={{
            hidden: {opacity: 0, y: 50},
            visible:{opacity: 1, y:0}
        }}
        >       
         <form
         target="_blank"
         onSubmit={onSubmit}        
         action=""
         method="POST"
         >
            <input className="w-full bg-blue p-3 placeholder-opaque-black mb-3 rounded-md
            "type="text" placeholder='Name'
            {...register("name", {
                required: true, maxLength:100,
            })}
            />

            {errors.name && (
                <p className="text-red mt-1">
                    {errors.name.type === "required" && "This feild is required"}
                    {errors.name.type === "maxLength" && "Maximum 100 char"}
                </p>
            )}

            <input className="w-full bg-blue p-3 placeholder-opaque-black mb-3 rounded-md
            "type="mail" placeholder='Email'
            {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            />

            {errors.email && (
                <p className="text-red mt-1">
                    {errors.email.type === "required" && "This feild is required"}
                    {errors.email.type === "pattern" && "Invalid email address"}
                </p>
            )}

            <textarea className="w-full bg-blue p-3 placeholder-opaque-black mb-3 rounded-md"type="mail" placeholder='Address'
            cols="50"
            rows="4"            
            {...register("address", {
                required: true,
                maxLength:1000,
            })}
            />

            {errors.address && (
                <p className="text-red mt-1">
                    {errors.address.type === "required" && "This feild is required"}
                    {errors.address.type === "maxLength" && "Maximum 1000 char"}
                </p>
            )}

            <button className="1/3 bg-yellow text-deep-blue hover:text-white hover:bg-red px-8 py-3 font-semibold"> CONTACT </button>
        </form> 

        </motion.div>
      </div>
      
      
    </div>
  )
}

export default Contact
