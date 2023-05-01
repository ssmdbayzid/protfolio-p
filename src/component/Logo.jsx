import React from 'react'
import './Logo.css'

const Logo = () => {

    const text = document.querySelector(".text p");
   if(text) {text.innerHTML = text.innerText.split("").map((char, i) => <span style={`transform:rotate(${ i * 5}deg)`}>{char}</span>).join("")}
  return (
    <div className="circle">
        <div className="logo"></div>
        <div className="text">
            <p className="text-lg">S S Md. Bayzid - Web Developer -</p>
        </div>
      
    </div>
  )
}

export default Logo
