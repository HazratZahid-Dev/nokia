import React from 'react'
import '../PagesStyle/MeetWithUs.css'
import img from '../images/nokia2.jpg'
import { BiRightArrowAlt, BiPlay } from 'react-icons/bi'

const MeetWithUs = () => {
    return (
        <>
            <div className='MeetWithUS'>
                <img src={img} alt='imgNotLoad' className='img__main'></img>
                <div className='text__part flex w-[100%] '>
                <div>
                    <div className=' gap-2 rounded-4xl ml-1'>
                       
                        <h3 className='meet'>  <div className='Meet__line'></div>Meet With Us</h3>
                        <h1 className='ready'>Ready To Get Any Project<br /> Meet With Us</h1>
                    </div>
                    <div className='btn__part'>
                        <button type='button' className='C__btn '>CONTACT US <BiRightArrowAlt className='Arrows' /></button>
                        <button type='button' className='O__btn'>OUR PROJECTS <BiRightArrowAlt className='Arrows' /></button>
                    </div>
                    </div>

                    <div >
                        <button type='button' className='Bi__play '><BiPlay /></button>
                     </div>
                </div>
                {/* <div className='btn__sec'>
                    <button type='button' className='Bi__play'><BiPlay /></button>
                </div> */}
            </div>
        </>
    )
}

export default MeetWithUs
