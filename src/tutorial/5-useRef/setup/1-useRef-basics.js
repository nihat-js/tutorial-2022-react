import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {

  const nameRef = useRef(null)

  const formHandle = (e) => {
    e.preventDefault()
    console.log(nameRef)
  }

  return <div>
    <form onSubmit={formHandle}>
      <input type='text' ref={nameRef} ></input>
      <button > Submit  </button>
    </form>
  </div>
};

export default UseRefBasics;
