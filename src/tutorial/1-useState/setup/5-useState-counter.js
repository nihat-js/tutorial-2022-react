import React, { useState } from 'react';

const UseStateCounter = () => {

  const [val, setVal] = useState(0)

  const valDecrease = () => {
    setVal(val - 1)
  }
  const valReset = () => {
    setVal(0)
    document.title = "Resetted"
  }
  const valIncrease = () => {
    setVal(val + 1)
    document.title = "Increased"
  }


  return (
    <>
      <section>
        <h2> I am a counter. My value is : {val}  </h2>
        <div>
          <button className='btn' onClick={valDecrease}> Decrease </button>
          <button className='btn' onClick={valReset}> Reset </button>
          <button className='btn' onClick={valIncrease} > Increase </button>

        </div>
      </section>
    </>
  )
};

export default UseStateCounter;
