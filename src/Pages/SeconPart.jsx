import React from 'react'
import '../PagesStyle/SecondPart.css'

const SeconPart = () => {

    const items = [...document.querySelectorAll('.number')];

    const updateCount = (el) => {
      const value = parseInt(el.dataset.value);
      const increment = Math.ceil(value / 1000);
      // const increment = 1;
      let initialValue = 0;
    
      const increaseCount = setInterval(() => {
        initialValue += increment;
    
        if (initialValue > value) {
          el.textContent = `${value}+`;
          clearInterval(increaseCount);
          return;
        }
    
        el.textContent = `${initialValue}+`;
      }, 1);
      console.log(increaseCount);
    };
    
    items.forEach((item) => {
      updateCount(item);
    });
    
    return (
        <>
            <div className='secondPart__heading'>
              
                <div className='main__circle'>
                    <div className='succeeded'>
                        <span className="number" data-value="103">23</span>
                        <p className='counterPara'>Succeeded Projects</p>
                    </div>
                    <div className='succeeded'>
                        <span className='number' data-value="500">111</span>
                        <p className='counterPara'>Working Hours </p>
                    </div>
                    <div className='succeeded'>
                        <span className="number" data-value="500">121</span>
                        <p className='counterPara'>Happy Clients</p>
                    </div>

                </div>
            </div>

            <div className='bottom__buttons'>
                <button className='Bottom__btn ' id='bg__blue'>Who I am</button>
                <button className='Bottom__btn'>Work History</button>
                <button className='Bottom__btn'>Profissional Skills</button>
                <button className='Bottom__btn'>Certification</button>
            </div>
        </>
    )
}

export default SeconPart


  {/* <div className='text-center'>
                <h1 className='headers'>250+</h1>
                <p className='header__bottom'>Satisfied Clients</p>
            </div>
            <div className='text-center'>
                <h1 className='headers'>59K+</h1>
                <p className='header__bottom'>Projects Complete</p>
            </div>
            <div className='text-center'>
                <h1 className='headers'>37.9+</h1>
                <p className='header__bottom'>Award Wining</p>
            </div>
            <div className='text-center'>
                <h1 className='headers'>456+</h1>
                <p className='header__bottom'>Experience member</p>
            </div> */}