import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const DotGroup = ({selectedPage, setSelectedPage}) => {

  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:border-2 before:border-yellow before:rounded-full before:top-[-50%] before:left-[-50%]`
  return ( <div className="flex flex-col gap-6 fixed top-[60%] right-7">
    <AnchorLink
    className={`${selectedPage === "home" ? selectedStyles : 'bg-grey'} h-3 w-3 rounded-full`}
    href={`#${selectedPage}`}
    onClick={()=>setSelectedPage("home")}
    />
    <AnchorLink
    className={`${selectedPage === "skills" ? selectedStyles : 'bg-grey'} h-3 w-3 rounded-full`}
    href={`#${selectedPage}`}
    onClick={()=>setSelectedPage("skills")}
    />
    <AnchorLink
    className={`${selectedPage === "projects" ? selectedStyles : 'bg-grey'} h-3 w-3 rounded-full`}
    href={`#${selectedPage}`}
    onClick={()=>setSelectedPage("projects")}
    />
    <AnchorLink
    className={`${selectedPage === "testimonials" ? selectedStyles : 'bg-grey'} h-3 w-3 rounded-full`}
    href={`#${selectedPage}`}
    onClick={()=>setSelectedPage("testimonials")}
    />
    <AnchorLink
    className={`${selectedPage === "contact" ? selectedStyles : 'bg-grey'} h-3 w-3 rounded-full`}
    href={`#${selectedPage}`}
    onClick={()=>setSelectedPage("contact")}
    />

  </div>
    
  )
}

export default DotGroup
