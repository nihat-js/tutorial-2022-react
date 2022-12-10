import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0)
  
   const getUser = async () => {
    
  }

  useEffect(() => {
    document.title = value;

  }, [])


  return <div>
    <h4> Starting agin {value} </h4>
    <button onClick={() => setValue(value + 1)}> Plus 1 </button>
  </div>
};

export default UseEffectBasics;
