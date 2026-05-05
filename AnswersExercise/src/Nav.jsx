import React, { useContext } from 'react'
import UserContext from './Context'


export default function Nav() {
  const user= useContext(UserContext);
  return (
    <div>
        <h1>navs</h1>
        <h3>my name is {user.name}</h3>
        <p>my role is : {user.role}</p>
    </div>
  )
}
