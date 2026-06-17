import React, { useContext } from 'react'
import TodoContext from './TodoContext'

export const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext)

  return (
    <li className='todo-item'>
      <div className='todo-left'>
        <input
          type="checkbox"
          checked={todo.completet}
          onChange={() =>
            dispatch({ type: "toggol", payload: todo.id })
          }
        />

        <span
          style={{
            textDecoration: todo.completet
              ? "line-through"
              : "none",
            cursor: "pointer",
          }}
        >
          {todo.text}
        </span>
      </div>

      <button
        className='delete-btn'
        onClick={() =>
          dispatch({ type: "delete", payload: todo.id })
        }
      >Delete
      </button>
    </li>
  )
}