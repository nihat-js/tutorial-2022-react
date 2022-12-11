import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])



  const formHandler = (e) => {
    e.preventDefault();
    if (name && email) {
      const newPerson = { name: name, email: email }
      setPeople(people => {
        return [...people, newPerson]
      })
      setName('')
      setEmail('')

    } else {
      console.log('Empty Problem')
    }
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
          <button type='submit'>  Add Person  </button>
        </div>
      </form>
      <div className='people'>
        {people.map((person, index) => {
          return <div className='item'>
            <span> {person.name} </span>
            <span> {person.email}  </span>
          </div>
        })}
      </div>
    </>
  )
};

export default ControlledInputs;
