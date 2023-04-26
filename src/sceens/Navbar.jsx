import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import React from 'react'
import useMediaQuery from "../hooks/useMediaQuery";
import menuIcon from '../assets/menu-icon.svg'
import closeIcon from '../assets/close-icon.svg'
import { motion, AnimatePresence } from "framer-motion";


const Link = ({page, selectedPage, setSelectedPage}) => {
    const lowerCasePage = page.toLowerCase();


    return (
        <AnchorLink

        className={`${selectedPage === lowerCasePage ? "text-yellow" :""} hover:text-yellow transition  duration-500`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveMediumScreen = useMediaQuery("(min-width: 768px)");
    const navbarBg = isTopOfPage ? "" : "bg-red";
 
    const item={
        exit:{
            opacity: 0,
            height: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.3,
                delay: 0.9
            }
        }
    }

    return (
    <nav className={`${navbarBg} z-40 w-full justify-between fixed top-0 py-6`}>
        <div className="flex justify-between items-center mx-auto w-5/6">
        
        <h1 className="font-playFair text-3xl font-bold">
            BAYZID
        </h1>

            {/* DESKTOP NAVBAR */}

        {isAboveMediumScreen ? (
            <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
            </div>
         ) : (
         <button className="rounded-full p-2 bg-red"
         onClick={()=> setIsMenuToggled(!isMenuToggled)}>
            <img src={menuIcon} alt="menu-icon" />
         </button>       
        )}
        {/* MOBILE MENU POP  */}
        <AnimatePresence>
        {!isAboveMediumScreen && isMenuToggled &&
        <motion.div
        variants={item}
        initial={{height: 0, opacity: 0}}
        animate={{height:"100vh", opacity: 1,}}
        transition={{duration: 0.8}}
        exit="exit"

        className="fixed top-0 right-0 bottom-0 bg-deep-blue w-full">
            
            {/* Close Button  */}
            <div className="flex bg-slate-400 items-center justify-between py-4 px-6">
            <div className="flex justify-between items-center text-center ">        
            <h1 className="font-playFair text-3xl font-bold">
                BAYZID
            </h1>
            </div>
                <button
                className=" bg-red/70 my-3 right-5 top-2 rounded-full  p-2"
                onClick={()=> setIsMenuToggled(!isMenuToggled)}
                >
                <img src={closeIcon} alt="close-icon" />
                </button>
            </div>
                <hr />
        <div className="flex pt-16 w-full items-center justify-center flex-col gap-12 font-semibold ">
        <Link               
                className="border-b-2 border-yellow "
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
        </div>
        </motion.div>
        }
        </AnimatePresence>

        </div>
    </nav>
  )
}

export default Navbar
