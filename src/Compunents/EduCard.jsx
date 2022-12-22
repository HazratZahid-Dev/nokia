import React from 'react'
import Data from '../Config/EduData'
import '../CompunentsStyle/EduCard.css'

const EduCard = () => {
  return (
    <>
    <div className='edu__cards'>
    {Data.map((it)=>{
        return(
            <>
                <div className='edu__card'>
                <div className='flex gap-3'>
                     <h1 className='icons__edu'>{it.book}</h1>
              
                   
                       
                    
                   
                    <div>
                        <h2 className='School'>{it.school}</h2>
                        <h3 className='certificate'>{it.certificate}</h3> 
                    </div>

                    </div>
                     <p className='edu__para'>{it.para}</p> 
                    
                </div>

                {/* <div className='bubble-bottom '>
                    <p> we use technologies like cookies to store and/or access we use technologies like cookies to store and/or accessv we use technologies like cookies to store and/or access we use technologies like cookies to store and/or access</p>
                </div> */}
            </>
        )


        
    })}

    </div>

    </>
  )
}

export default EduCard