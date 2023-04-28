import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import facebook from '../assets/facebook.png'
import instragram from '../assets/instagram.png'
import linkedIn from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'


const SocialMedia = () => {

  return (
    <div className="flex justify-center md:justify-start py-10 gap-7">
      <AnchorLink
      className="h-10 w-10 hover:opacity-50 transition duration-500"
      target='_black'
      href='https://www.facebook.com/'
      rel='noreferror'
      >
        <img src={facebook} alt="facebook" />
      </AnchorLink>
      <AnchorLink
      className="h-10 w-10 hover:opacity-50 transition duration-500"
      target='_black'
      href='https://www.instragram.com/'
      rel='noreferror'
      >
        <img src={instragram} alt="facebook" />
      </AnchorLink>
      <AnchorLink
      className="h-10 w-10 hover:opacity-50 transition duration-500"
      target='_black'
      href='https://www.linkedin.com/'
      rel='noreferror'
      >
        <img src={linkedIn} alt="facebook" />
      </AnchorLink>
      <AnchorLink
      className="h-10 w-10 hover:opacity-50 transition duration-500"
      target='_black'
      href='https://www.twitter.com/'
      rel='noreferror'
      >
        <img src={twitter} alt="facebook" />
      </AnchorLink>
    </div>
  )
}

export default SocialMedia
