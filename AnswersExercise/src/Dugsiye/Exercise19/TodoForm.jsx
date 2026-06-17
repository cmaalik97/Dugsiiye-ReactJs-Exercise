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
         <div className='container'>
          <h1>My Todo List</h1>
          <div className='input-box '>
            <input 
          type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter a new Todo" />
          <button onClick={handleAdd} className='add-btn'>Add</button>
         
          </div>
       
         </div>
      )
}
