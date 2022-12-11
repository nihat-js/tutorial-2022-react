import React, { useState } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)



const PropDrilling = () => {

  const [people, setPeople] = useState(data)
  return (
    <>
      <h3> Prop Drilling </h3>
      <div>
        <PeopleList people={people} ></PeopleList>
      </div>
    </>
  )
};


const PeopleList = ({ people }) => {
  return (
    <>
      {people.map(p => {
        return (
          <div key={p.id}>
            <PeopleSingle data={p}>  </PeopleSingle>
          </div>
        )
      })}
    </>
  )
}

const PeopleSingle = (props) => {
  return (
    <div >
      <span> {props.data.id}  </span> <span>{props.data.name}  </span>
    </div>
  )
}


export default PropDrilling;
