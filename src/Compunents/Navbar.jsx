import React, { useState } from "react";
 import '../CompunentsStyle/Navbar.css'
 import { FaTimes, FaBars } from "react-icons/fa";
import { FaFacebook,FaTwitter,FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [icon, seticon] = useState(false);
  return (
    <div className='Main__Navbar'>
    <div>
    <h1 className='Nav__heading'>NokIa</h1>
    </div>
    <div className="mt-4">
        <ul id="pages"  className={icon ? "small active" : "small"}
        onclick={() => seticon(!icon)}>
            <li><a href='#home' className="text-white">Home</a></li>
            <li><a href='#about' className="text-white">About</a></li>
            <li><a href='#Services'className="text-white">Services</a> </li>
            <li><a href='#Project' className="text-white">Projects</a></li>
            <li><a href='#MyExperience' className="text-white">MyExperience</a></li>
            <li><a href='#ClientFeedBack' className="text-white">ClientFeedBack</a></li>
            <li><a href='#FollowOn' className="text-white">FollowOn</a></li>
            <li><a href='#Office' className="text-white">Office</a></li>

        </ul>
    </div>
    <div className='flex gap-3'>
      <button type='button' className='nokia__nav__btn'>HIRE ME</button>
      <h3 className='Navbar__icons'><FaFacebook className="faFacebook"/><FaTwitter className="faFacebook"/><FaYoutube className="faFacebook"/></h3>
    </div>

    <div className="menu__icon">
        <span className="navbar__icon" onClick={() => seticon(!icon)}>
          {!icon ? <FaBars /> : <FaTimes />}
        </span>
      </div>
        
    </div>
  )
}

export default Navbar


