import React, { useState } from 'react'
// import TextField from '@mui/material/Button';
import {BsPlusLg} from 'react-icons/bs'
import {AiOutlineMinus} from 'react-icons/ai'
const Office = () => {
    const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(!showDiv);
  }


  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if(count<4){
        setCount(count + 1);

    }
   
  }

  const handleDecrement = () => {
    if(count<=4){
        setCount(count - 1);

    }
   
  }

//   const [count, setCount] = useState(0);
//   const [decrement, setDecrement] = useState(0);


//   const HandleClick = () => {
//     if (count < 4) {
//       setCount(count + 1);
//     }
//   }

//   const Decrement=()=>{
//     if(decrement > 4){
//         setDecrement(decrement-1);
//     }
//   }
  return (
    
    <>
        <div id='Office'className='w-[90%] h-[40vh] m-auto' >
        <div className='  border bg-slate-300 flex p-32 '>
        <div>
                <input type='text' placeholder='Destination'></input> 
        </div>

        <div className='gap-6'>
            <button className='border ml-3' type='button' onClick={handleClick}>Room1</button>
            <button className='border ml-3' type='button'>Travelers</button>
            {showDiv &&( 
        <div className='bg-black text-white p-5 rounded-2xl'>
        <div className='flex gap-9'>
            <button onClick={handleIncrement} className='text-white'><BsPlusLg/></button>
            <button onClick={handleDecrement} className='text-white'><AiOutlineMinus/></button>

      <div>{count}</div>
     </div>


        </div>
      ) }

        </div>           
        </div>
          
        </div>
      
    </>
  )
}

export default Office