import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Ulvi',
    age: '21',
    bio: 'Currently Stugdent'

  })


  const changeBio = () => {
    setPerson({ ...person, bio: 'Learned React' })
  }

  return (
    <>
      <h2>useState object example</h2>;
      <h3> Name : {person.name} </h3>
      <h3>Age :  {person.age} </h3>
      <h3> Bio : {person.bio} </h3>
      <button onClick={() => { changeBio() }}>  Change Bio </button>
    </>
  )

};

export default UseStateObject;
