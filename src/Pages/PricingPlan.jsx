import React from 'react'
import PricingCard from '../Compunents/PricingCard'
import '../PagesStyle/PricingPlan.css'

const PricingPlan = () => {
  return (
    <>
    <div className='pricing__main'>
    <div className='pricing__heading'>
        <h3 className='pricing'><div className='priceingLine'></div>Pricing Plan</h3>
        <div className='heading__btn'>
            <h1 className='Price__Heading'>We Have A Smart<br/> Pricing Package</h1>
            <div className='price__btn__div'>
                 <button type='button' className='monthly' >Monthly</button>
                <button type='button' className='Yearly' >Yearly</button>
            </div>

        </div>
        </div>
        <PricingCard/>

    </div>
        
    </>
  )
}

export default PricingPlan