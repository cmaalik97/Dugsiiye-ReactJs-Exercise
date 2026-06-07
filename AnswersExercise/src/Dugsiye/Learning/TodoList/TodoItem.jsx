import React, { useContext } from 'react'
import TodoContext from './TodoContext'

export const TodoItem = ({todo}) => {
    const {dispatch}=useContext(TodoContext)
  return (
   <li >
    <span style={ {textDecoration: todo.completet? "line-through" : "none", cursor:'pointer'}}
    onClick={()=>dispatch({type : "toggol" , payload: todo.id})}>
        {todo.text}</span>
    <button onClick={()=>dispatch({type: "delete" , payload : todo.id})}>Delete</button>
   </li>
  )
}
