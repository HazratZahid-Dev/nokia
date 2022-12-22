import React from 'react'
import ClientsCard from '../Compunents/ClientsCard'
import '../PagesStyle/Clients.css'

const Clients = () => {
  return (
    <>
        <div className='Main__clients' id='ClientFeedBack'>

                    <div className='MyExperience'>
                        <div className='exp__line'></div>
                        <div>
                            <h3 className='feedBack'>Clients FeedBack</h3>
                        </div>
                        <div className='exp__line'></div>
                    </div>
                    <div>
                        <h1 className='Client__Say'>What Our Cliensts Say<br/> About My Projects</h1>
                    </div>

                    <div className='Client__content'>
                        <div className='client__left'>

                        </div>
                        <div className='client__right'>
                            <ClientsCard/>
                        </div>
                    </div>

        </div>
    </>
  )
}

export default Clients