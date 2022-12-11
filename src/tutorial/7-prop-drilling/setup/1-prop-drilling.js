import React, { useEffect, useState } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)



const PropDrilling = () => {

  const [people, setPeople] = useState(data)
  const removePeople = (id) => {
    setPeople(people => {
      return people.filter(p => id !== p.id)
    })
  }
  useEffect(() => {
    // removePeople(2) 
  }, [])
  return (
    <>
      <h3> Prop Drilling </h3>
      <div>
        <PeopleList people={people} removePeople={removePeople} ></PeopleList>
      </div>
    </>
  )
};


const PeopleList = (props) => {
  return (
    <>
      {props.people.map(p => {
        return (
          <div key={p.id}>
            <PeopleSingle person={p} removePeople={props.removePeople} >  </PeopleSingle>
          </div>
        )
      })}
    </>
  )
}

const PeopleSingle = (props) => {
  return (
    <div >
      <span> {props.person.id}  </span> <span>{props.person.name}  </span> < button onClick={() => props.removePeople(props.person.id)}>  Remove It </button>
    </div>
  )
}


export default PropDrilling;
