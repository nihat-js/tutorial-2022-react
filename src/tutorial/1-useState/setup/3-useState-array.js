import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  const [people, setPeople] = React.useState(data)

  const btnRemove = (id) => {
    let newPeople = people.filter(p => p.id !== id)
    setPeople(newPeople)
  }
  return (
    <>
      {people.map(p => {
        return (
          <div key={p.id} className='item'>
            <h2> {p.name} </h2>
            <button onClick={() => { btnRemove(p.id) }}>  Remove </button>
          </div>

        )
      })}
    </>
  )
};

export default UseStateArray;
