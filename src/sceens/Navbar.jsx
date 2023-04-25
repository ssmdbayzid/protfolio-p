import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import React from 'react'
import useMediaQuery from "../hooks/useMediaQuery";
import menuIcon from '../assets/menu-icon.svg'


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
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const navbarBg = isTopOfPage ? "" : "bg-red";
  return (
    <nav className={`${navbarBg} z-40 w-full justify-between fixed top-0 py-6`}>
        <div className="flex justify-between items-center mx-auto w-5/6">
        
        <h1 className="font-playFair text-3xl font-bold">
            BAYZID
        </h1>

            {/* DESKTOP NAVBAR */}

        {isDesktop ? (
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
        <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">

        </div>
        </div>
    </nav>
  )
}

export default Navbar
