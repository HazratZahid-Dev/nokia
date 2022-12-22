import React from 'react'
import '../CompunentsStyle/ClientsCard.css'
import img from '../images/nokia1.jpg'
import img1 from '../images/nokia2.jpg'
import {FaStar} from 'react-icons/fa'

const ClientsCard = () => {
  return (
    <>
        <div className='flex gap-6'>
        <div className='CardOne'>
            <div className='flex gap-3'>
                <img src={img} className='cardOne__img'></img>
                <div>
                    <h2 className='font-bold'>David Warnner</h2>
                    <h4 className='webDeveloper'>Web Developer</h4>
                </div>

            </div>
            <div>
                <p className='cardOnePara'>In publishing and graphic design, Lorem ipsum  is a placeholder text commonly used to demonstrate the visual form .</p>
                <h3 className='star'><FaStar/> <FaStar/><FaStar/><FaStar/><FaStar/></h3>
            </div>

            
        </div>


        <div className='premium'>
            <h2>530K Premium <br/> Clients</h2>
        </div>
        {/* <h1>hdwehduwegdfwefweofjwefhwefyweo</h1> */}

        </div>

        <div className='flex'>


        <div className='CardOne ' id='cardTwo'>
            <div className='flex gap-3'>
                <img src={img1} className='cardOne__img'></img>
                <div>
                    <h2 className='font-bold'>David Mark</h2>
                    <h4 className='webDeveloper'>Web Developer</h4>
                </div>

            </div>
            <div>
                <p className='cardOnePara'>In publishing and graphic design, Lorem ipsum  is a placeholder text commonly used. </p>
                <h3 className='star'><FaStar/> <FaStar/><FaStar/><FaStar/><FaStar/></h3>
            </div>

            
        </div>

        <div className='CardOne ' id='cardThree'>
            <div className='flex gap-3'>
                <img src={img1} className='cardOne__img'></img>
                <div>
                    <h2 className='font-bold'>Somali Salva</h2>
                    <h4 className='webDeveloper'>Web Developer</h4>
                </div>

            </div>
            <div>
                <p className='cardOnePara'>In publishing and graphic design, Lorem ipsum  used.In publishing and graphic design, Lorem ipsum  is a placeholder text commonly used. </p>
                <h3 className='star'><FaStar/> <FaStar/><FaStar/><FaStar/><FaStar/></h3>
            </div>

            
        </div>

        </div>
        
    </>
  )
}

export default ClientsCard