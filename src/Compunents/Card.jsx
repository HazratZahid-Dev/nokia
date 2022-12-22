import React from 'react'
import Data from '../Config/CardData'
import '../CompunentsStyle/Card.css'
import {BiRightArrowAlt} from 'react-icons/bi'

const Card = () => {
  return (
    <div className='Main__Cards'>
        {Data.map((it)=>{
            return(
                <>
                <div >
                    <div className='cards'>
                        <h3 className='icons'>{it.icons}</h3>
                        <h1 className='heading'>{it.heading}</h1>
                        <p className='card__paraghraph'>{it.paraghraph}</p>
                        <div className='w-[100%] flex justify-center mt-4'>
                        <button type='button' className='Card__btn'>{it.button}<BiRightArrowAlt className='mt-1'/></button>

                        </div>
                    </div>
                </div>
                
                

                </>
               

            )
        })}
    </div>
  )
}

export default Card