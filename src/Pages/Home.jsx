import React from 'react'
 import Navbar from '../Compunents/Navbar';


 import { FaArrowRight } from "react-icons/fa";
import '../PagesStyle/Home.css'


const Home = () => {

    


  return (
    <>
    <div className='Main__home ' id='home'>
    <Navbar/>
    <div className='inner__Part'>
        <h1 className='Home__page__heading'>Hello I'm<br/> Hazrat Zahid</h1>
        <p className='Home__parag'>PROFISSIONAL WEB DESIGNER</p>
        <div className='btn__div'>
            <button className='ours__btn'>OUR SERVICES</button>
            <button className='meetus__btn gap-2'>MEETUS <FaArrowRight className='mt-1'/></button>

        </div>
    </div>


    </div>
    
    
    </>
  )
}

export default Home