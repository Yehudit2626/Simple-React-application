import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router";

export default withRouter(function Main(props) {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch('https://gorest.co.in/public/v1/users')
      .then(response => response.json())
      .then(data => {
        let temp = data['data'];
        temp.sort((a, b) => a.name.localeCompare(b.name))
        setUsers(temp.filter((user) => user.gender == 'female'))
      })
  }

  const getMore = (event) => {
    props.history.push(`/info/${event.target.value}`)
  }

  return (
    <div>
      <header>
        <button className='btnGetUsers' onClick={getUsers}>Get users</button>
      </header>
      <main>
        <ul>
          {users.map((user) => {
            return <li>
              <p>{user.name}: </p>
              <p className={user.status}>{user.status}</p>
              <button value={user.id} onClick={getMore}>  +</button>
            </li>
          })}
        </ul>
      </main>
    </div>

  )
})
