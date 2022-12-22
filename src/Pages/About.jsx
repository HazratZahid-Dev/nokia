import React from 'react'
import about from '../images/about.webp'
import '../PagesStyle/About.css'
import {BiCheck} from 'react-icons/bi'

const About = () => {
  return (
    <>
        <div className='Main__About' id='about'>
        {/* <div className='w-[50%] h-[400px]'> */}
            <img src={about} className='img__sec'/>
        {/* </div> */}
            
          
            
            <div className='RightSide'>
                <div className='line__text'>
                    <div className='line'></div>
                    <h2>About Me</h2>
                </div>
                <h1 className='About__heading'>25 Years Of Experience<br/> In Web Design</h1>
                
                <p className='About__para'>It is a long established fact that a reader will be distracted by the<br/> 
                readable content of a page when looking at its layout. The point <br/>
                of using Lorem Ipsum is that it has a more...</p>
                <div className='Courses'>
                <div className='sectionOne'>
                    <p className='checkAndPara'><BiCheck className='FaCheck'/>Web Design &#40;UX/UI&#41;</p>
                    <p className='checkAndPara'><BiCheck className='FaCheck'/>Web Development</p>
                    <p className='checkAndPara'><BiCheck className='FaCheck'/>Logo Design & Branding</p>

                </div>
                <div className='sectionTwo'>
                <p className='checkAndPara' ><BiCheck className='FaCheck'/>Mobile App Developement</p>
                <p className='checkAndPara'><BiCheck className='FaCheck'/>HTML & CSS Design</p>
                <p className='checkAndPara'><BiCheck className='FaCheck'/>Wordpress Developement</p>
                   
                </div>
                {/* <div className='sectionThree'>
                   
                </div> */}

            </div>
            </div>
           
        </div>


    </>
  )
}

export default About