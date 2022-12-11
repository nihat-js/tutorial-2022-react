import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PeopleContext = React.createContext()

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <>
      <h3>prop drilling</h3>
      <PeopleContext.Provider value={{ people, removePerson }}>
        <List people={people} removePerson={removePerson} />
      </PeopleContext.Provider>
    </>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  const contextData = useContext(PeopleContext)
  console.log(contextData)
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => contextData.removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
