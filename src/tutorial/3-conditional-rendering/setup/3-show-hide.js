import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(true)


  return (
    <div>
      <h2>show/hide </h2>
      <button onClick={() => { setShow(!show) }}>  Show or Hide </button>
      {show && <Item />}
    </div>

  )

};


const Item = () => {
  return <>
    <h3> The weather is bad today. </h3>
  </>
}

export default ShowHide;
