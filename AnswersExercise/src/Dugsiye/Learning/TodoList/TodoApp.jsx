import React, { useReducer } from 'react'
import TodoContext from './TodoContext'
import {intialState, reducer  } from './reducer'
import { TodoList } from './TodoList'
import { TodoForm } from './TodoForm'
export const TodoApp = () => {

    const [state , dispatch]=useReducer(reducer , intialState)
  return (
    <TodoContext.Provider value={{state, dispatch}}>
        <h2>Todo App with Context and Reducer </h2>
         <TodoForm/>
         <TodoList/>
       
   
    </TodoContext.Provider>
  )
}
