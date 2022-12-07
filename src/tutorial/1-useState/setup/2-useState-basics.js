import React, { useState } from 'react';

const UseStateBasics = () => {

  // let [title, setTitle] = useState('Weather is good')

  let arr = useState('weather')
  // let setTitle = useState('weather')[1]

  const btnClick = () => {
    arr[1]('Random Name')
  }


  return (
    <React.Fragment>
      <h2> {arr[0]} </h2>
      <button onClick={btnClick}> Click me </button>
    </React.Fragment>
  )
};

export default UseStateBasics;
