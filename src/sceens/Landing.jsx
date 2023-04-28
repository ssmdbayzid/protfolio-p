import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import img from '../assets/profile-image.png'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import SocialMedia from '../component/SocialMedia'


const Landing = ({setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <div className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
      {/*Image Section */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {
            isAboveMediumScreens ? 
            ( <div className="relative z-0 ml-20 before:absolute before:z-[-1] before:-top-20 before:-left-20 before:h-full before:border-blue  before:border-4 before:rounded-t-[400px] before:w-full before:max-w-[400px]">
                <img src={img} alt="profileImage" className="hover:saturate-200 hover:filter transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]" />

            </div> )
            :
            ( <img src={img} alt="profileImage" className="hover:saturate-200 hover:filter transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]" />)
        }
      </div>
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount: 0.5}}
        transition={{duration: 0.5}}
        variants={{
            hidden: {opacity: 0, x:-50},
            visible: {opacity: 1, x: 0}
        }}
        className="">
            <p className="text-6xl selection:text-yellow font-playFair text-red font-semibold text-playFair z-10 text-center md:text-start">
                S S <span className="xs:relative text-yellow xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] xs:before:z-[-1] ">Bayzid</span>
            </p>
            <p className="mt-10 mb-7  text-md text-center md:text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tenetur eligendi, voluptatem dolore ad reiciendis!
            </p>
        </motion.div>   
        <div className="flex justify-center md:justify-start mt-4">
          <motion.div
          className=" flex  "
          initial="hidden"
          whileInView="visible"
          viewport={{once:false, amount: 0.5} }
          transition={{delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: {opacity: 0, x: -50 },
            visible: {opacity: 1, x: 0}
          }}
          >
        <AnchorLink
        className="bg-gradient-rainblue hover:bg-blue hover:text-white px-7 flex justify-center items-center text-deep-blue font-semibold  cursor-pointer transition duration-500 "
        onClick={()=>setSelectedPage("contact")}
        href="#contact"
        >
          Contact Me
        </AnchorLink>
         
        <AnchorLink>
        <div className="bg-gradient-rainblue rounded-r-sm py-0.5 pr-0.5">
          <div className="bg-deep-blue hover:text-red text-white transition duration-500 px-10 font-playFair flex items-center justify-center md:justify-start py-3 font-semibold cursor-pointer ">
          Let's Talk
          </div>

        </div>
        </AnchorLink>
          </motion.div>
          </div>   

        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{delay: 0.4, duration: 0.5}}
        variants={{
          hidden:{opacity: 0, x: - 50},
          visible:{opacity: 1, x: 0}
        }}
        className=""

        >
          <SocialMedia />
        </motion.div>
                                                 
      </div>
    </div>
  )
}

export default Landing
