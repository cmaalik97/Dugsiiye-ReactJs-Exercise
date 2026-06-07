import React, { useContext } from 'react'
import TodoContext from './TodoContext'
import { useState } from 'react'

export const TodoForm = () => {
  
     const [text , setText]=useState("")
     const {dispatch}=useContext(TodoContext)
     const handleAdd=()=>{
         if(text.trim()){
             const newTodo={
                 id:Date.now(),
                 text,
                 completet:false,
             }
 
             dispatch({type :"add" ,payload : newTodo })
             setText("")
         }
     }
      return (
         <div>
          <h2>Todo App</h2>
          <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter a new Todo" />
          <button onClick={handleAdd}>Add</button>
         
         </div>
      )
}
