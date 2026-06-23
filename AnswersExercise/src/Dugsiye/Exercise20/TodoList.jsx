import React, { useReducer, useState } from 'react';
import { initialState, reducer } from './reducer'; // Adjust the path as necessary

const TodoList = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue) {
      const newTodo = {
        id: Date.now(), // Unique ID for each todo
        text: inputValue,
        completed: false
      };
      dispatch({ type: "add", payload: newTodo });
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    dispatch({ type: "toggle", payload: id });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  return (
    <div className="bg-gradient-to-r from-purple-200 to-blue-200 min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-4 text-center">My Todo List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Add a new todo..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded-l-lg"
          />
          <button
            onClick={addTodo}
            className="bg-purple-600 text-white px-4 rounded-r-lg hover:bg-purple-700"
          >
            Add
          </button>
        </div>
        <ul className="list-none">
          {todos.map((todo) => (
            <li key={todo.id} className="flex items-center justify-between mb-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="mr-2"
                />
                <span className={todo.completed ? 'line-through text-gray-500' : ''}>
                  {todo.text}
                </span>
              </label>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
