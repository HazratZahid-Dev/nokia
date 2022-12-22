import React from 'react'
import '../PagesStyle/Projects.css'
import img1 from '../images/main1.webp'
import img2 from '../images/main2.webp'
import img3 from '../images/nokia1.jpg'
import img4 from '../images/nokia2.jpg'
import img5 from '../images/nokia3.jpg'

const Projects = () => {
  return (
    <>
        <div className='projects__main' id='Project'>
            <div className=' projects__header'>
                <div className='project__line'></div>
              <h3 className='Latest__projets'>  Latest Projects</h3>
                <div className='project__line'></div>
            </div>

            <div >
                <h1 className='header__global'>We Have Done 26<br/> Global Projects</h1>
            </div>
            <div className='ImageSection'>
            <div className='fourImgSection'>
                <div className='flex gap-4 justify-center'>
                    <img src={img1} className='fourImage'></img>
                    <img src={img2} className='fourImage'></img>
                </div>
                <div className='flex gap-4 mt-4 justify-center'>
                    <img src={img3} className='fourImage'></img>
                    <img src={img4} className='fourImage'></img>
                </div>
                
            </div>

            <div className="rightSideImg">
                    <img src={img5} className='largeImg' ></img>
            </div>

            </div>
        </div>
    </>
  )
}

export default Projects