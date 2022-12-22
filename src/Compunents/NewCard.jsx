import React from 'react'
import Data from '../Config/NewsCardData'
import '../CompunentsStyle/NewsCard.css'
import {BiRightArrowAlt} from 'react-icons/bi'
import {BiCalendarEdit} from 'react-icons/bi'

const NewCard = () => {
    return (
        <>
            <div className='Main__Card__Latest'>
                {Data.map((it) => {
                    return (
                        <>
                            <div className='Card__Latest'>

                                <img src={it.img} className="New__img"></img>
                                <div className='WebDate'>
                                    <p>{it.web}</p>
                                    <p className='flex gap-1'><BiCalendarEdit className='Calender'/>{it.date}</p>
                                </div>
                                <h1 className='NewHeader'>{it.header}</h1>
                                <div className='btnShare'>
                                    <button className='blogBtn'>{it.blogBtn}<BiRightArrowAlt className='arrows'/></button>
                                    <button className='shareIcons'>{it.ShareIcons}</button>
                                </div>
                            </div>


                        </>
                    )

                })}
            </div>
        </>
    )
}

export default NewCard