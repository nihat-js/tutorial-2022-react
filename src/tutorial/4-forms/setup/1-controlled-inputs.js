import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const formHandler = (e) => {
    e.preventDefault();
    console.log(name, )
  }

  return (
    <>
      <form onSubmit={(e) => { formHandler(e) }}>
        <div className='form-group'>
          <label htmlFor=''> Name </label>
          <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} ></input>
        </div>
        <div className='form-group'>
          <label htmlFor=''> Email </label>
          <input type='text' value={email} onChange={(e) => { setEmail(e.target.value) }} ></input>
        </div>
        <div className='form-group'>
          <button type='submit'>  Send it   </button>
        </div>
      </form>
    </>
  )
};

export default ControlledInputs;
