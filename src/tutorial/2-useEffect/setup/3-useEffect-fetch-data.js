import React, { useState, useEffect } from 'react';



const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])


  useEffect(() => {
    getUsers();
  }, [])


  const getUsers = async () => {
    let response = await fetch(url);
    let data = await response.json();
    setUsers(data)
    console.log('Users', users)
  }


  return (
    <div>
      <h1> github users </h1>
      {/* <h3> test {users[0].login} </h3> */}
      {users.map(u => {
        return (
          <h2 key={u.id}> {u.login} </h2>
        )
      })}
    </div>
  )
};

export default UseEffectFetchData;
