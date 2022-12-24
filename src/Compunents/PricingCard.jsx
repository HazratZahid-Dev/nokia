import React from 'react'
import pricingData from '../Config/PricingCardData'
import '../CompunentsStyle/PricingCard.css'
import {BiCheck,BiRightArrowAlt} from 'react-icons/bi'

const PricingCard = () => {
    return (
        <>
            <div className='flex gap-4 flex-wrap justify-center shadow-blue-700'>

                {pricingData.map((it) => (
                    <>
                        <div className='price__card__main  '>
                            <div className='flex gap-2 p-4'>
                                <div className='img__circle'>
                                    <img src={it.img} className='card__img'></img>
                                </div>

                                <div>
                                    <h2 className='plan'>{it.plan}</h2>
                                    <h3 className='price'>{it.price}</h3>
                                </div>


                            </div>
                            <hr className='mt-2'/>
                            <div className='mt-4 p-3 text-center'>
                            <p className='flex gap-1 text-white mt-0 text-sm'><BiCheck className='mt-1'/>{it.graphic}</p>
                            <p className='flex gap-1 text-white mt-2 text-sm'><BiCheck className='mt-1'/>{it.web}</p>
                            
                            <p className='flex gap-1 text-white mt-2 text-sm'><BiCheck className='mt-1'/>{it.digital}</p>
                            
                            <p className='flex gap-1 text-white mt-2 text-sm'><BiCheck className='mt-1'/>{it.order}</p>
                            <p className='flex gap-1 text-white mt-2 text-sm'><BiCheck className='mt-1'/>{it.career}</p>
                            <button type='button' className='choosePlan'>{it.btn}<BiRightArrowAlt className='mt-1'/></button>
                            </div>



                        </div>




                    </>
                ))}

            </div>
        </>
    )
}

export default PricingCard