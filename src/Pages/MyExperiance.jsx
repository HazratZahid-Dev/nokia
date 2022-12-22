import React from 'react'
import EduCard from '../Compunents/EduCard'
import '../PagesStyle/MyExperience.css'

const MyExperiance = () => {
    return (
        <>
            <div className='MyExp__main' id='MyExperience' >
                <div >
                    <div className='MyExperience'>
                        <div className='exp__line'></div>
                        <div>
                            <h3>My Experiance</h3>
                        </div>
                        <div className='exp__line'></div>
                    </div>
                    <div >
                        <h1 className='education'>My Educational Background <br /> And Certification</h1>
                    </div>
                    <EduCard />

                </div>

            </div>

        </>
    )
}

export default MyExperiance