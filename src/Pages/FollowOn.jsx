import React from 'react'
import '../PagesStyle/FollowOn.css'
import { FaFacebookF, FaPlus,FaTwitter,FaGoogle, FaYoutube, FaInstagram, FaBitcoin } from 'react-icons/fa'

const FollowOn = () => {
    return (
        <>

            <div className='Follow__main ' id='FollowOn'>
                <div className=''>
                    <h4 className='followOn'> <div className='FollowLine'></div>Follow On</h4>
                    <h1 className='StayConnect'>Stay Connect<br /> With Us</h1>
                    <p className='FollowPara'>Image elements must have an alt prop, either with meaningful text,<br /> or an empty string for decorative </p>
                </div>


                <div className='flex flex-wrap gap-8'>
                    <div>
                        <div className='FaceBook'>
                            <button type='button' className='facebookBTN'><FaFacebookF /></button>
                            <div className=' Followers '>
                                <h2 className='text-center font-bold  '>25042</h2>
                                <p className='FollowersPara'>Followers</p>
                            </div>
                            <button type='button' className='facebookBTN' id='FaPlus'><FaPlus /></button>
                        </div>

                        <div className='FaceBook mt-2'>
                            <button type='button' className='facebookBTN' id='twitter'><FaTwitter /></button>
                            <div className='leading-0 Followers '>
                                <h2 className='text-center font-bold '>25042</h2>
                                <p className='FollowersPara'>Followers</p>
                            </div>
                            <button type='button' className='facebookBTN' id='FaPlus'><FaPlus /></button>
                        </div>

                        <div className='FaceBook mt-2'>
                            <button type='button' className='facebookBTN' id='google'><FaGoogle /></button>
                            <div className='leading-0 Followers '>
                                <h2 className='text-center font-bold '>25042</h2>
                                <p className='FollowersPara'>Followers</p>
                            </div>

                            <button type='button' className='facebookBTN' id='FaPlus'><FaPlus /></button>
                        </div>

                    </div>


                    <div>
                        <div className='FaceBook '>
                            <button type='button' className='facebookBTN' id='youtube'><FaYoutube/></button>
                            <div className='leading-0 Followers '>
                                <h2 className='text-center font-bold '>25042</h2>
                                <p className='FollowersPara'>Followers</p>
                            </div>
                            <button type='button' className='facebookBTN' id='FaPlus'><FaPlus /></button>
                        </div>

                        <div className='FaceBook mt-2'>
                            <button type='button' className='facebookBTN' id='insta'><FaInstagram/></button>
                            <div className='leading-0 Followers '>
                                <h2 className='text-center font-bold '>25042</h2>
                                <p className='FollowersPara'>Followers</p>
                            </div>
                            <button type='button' className='facebookBTN' id='FaPlus'><FaPlus /></button>
                        </div>

                        <div className='FaceBook mt-2'>
                            <button type='button' className='facebookBTN'><FaBitcoin/></button>
                            <div className='leading-0 Followers '>
                                <h2 className='text-center font-bold '>25042</h2>
                                <p className='FollowersPara'>Followers</p>
                            </div>

                            <button type='button' className='facebookBTN' id='FaPlus'><FaPlus /></button>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default FollowOn