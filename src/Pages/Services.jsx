import React from 'react'
import Card from '../Compunents/Card'
import '../PagesStyle/Services.css'

const Services = () => {
  return (
    <>
        <div className='Services' id='Services'>
            <div className='services__heading'>
            <div className='services__gap'>
              <div className='services__line'></div><h2>My Services</h2><div className='services__line'></div>
            </div>
                
                <h1 className='myServices__heading'>We Offer Best Services For<br/> Your Agency</h1>
            </div>
            <Card/>
            
        </div>
    </>
  )
}

export default Services