import React from 'react'
import '../CompunentsStyle/Footer.css'
import img1 from '../images/Blogs1.jpg'
import img2 from '../images/Blogs2.jpg'
import img3 from '../images/Blogs3.jpg'
import img4 from '../images/nokia1.jpg'
import img5 from '../images/nokia2.jpg'
import img6 from '../images/nokia3.jpg'


import { BsPhoneVibrateFill } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaSearchLocation, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { BsArrowRight } from 'react-icons/bs'
// import {IoCallSharp} from 'react-icons/im'


const Footer = () => {
    return (
        <>
            <div className='Footer flex-wrap '>
                <div>
                <div>
                     <h1 className='footerLogo'><BsPhoneVibrateFill className='phone' />NOKIA</h1>
                    <p className='footerPara'> Must have an alt prop, either with <br />  meaningful text, or an empty <br /> string for decorative </p>
                </div>
                   

                    <div className='flex gap-3'><button type='button' className='footer__btn'><FaFacebookF /></button>
                        <button type='button' className='footer__btn'><FaTwitter /></button>
                        <button type='button' className='footer__btn'><FaYoutube /></button>
                        <button type='button' className='footer__btn'><FaInstagram /></button>
                    </div>
                </div>
                <div >
                    <h2 className='contactMe' >Contact Me <div className='footerLine'></div></h2>
                    <div className='mt-3'>
                        <p className='locationPara'><FaSearchLocation className='mt-1' /> 250 Main Street, 2nd <br></br> Floor D-Block NewYork </p>
                        <p className='locationPara'><MdEmail className='mt-1' /> hazratzahid11@gmail.com</p>
                        <p className='locationPara'><FaPhoneAlt className='mt-1' />+989-22232</p>
                    </div>

                </div>
                <div>
                    <h2 className='contactMe'>NewsLetters<div className='footerLine'></div></h2>
                    <p className='locationPara mt-2'>Must have an alt prop, either with <br />  meaningful text, or an empty </p>
                    <button type='button' className='email__btn'>Send Youor Email<BsArrowRight /></button>
                </div>
                <div>
                    <h1 className='contactMe'>Instagram<div className='footerLine'></div></h1>
                    <div className='mt-4'>

                        <div className='flex gap-2 '>
                            <img src={img1} className='footerimg' />
                            <img src={img2} className='footerimg' />
                            <img src={img3} className='footerimg' />
                        </div>
                        <div className='flex gap-2 mt-2'>
                            <img src={img4} className='footerimg' />
                            <img src={img5} className='footerimg' />
                            <img src={img6} className='footerimg' />
                        </div>
                    </div>

                </div>



            </div>

            <div>
                <footer><p className='AllRight'>	&#169; 2022 Nokia, All Right Reserved</p></footer>
            </div>



        </>
    )
}

export default Footer