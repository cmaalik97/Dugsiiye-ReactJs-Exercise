import { useState } from "react";

function TodoList(){
    const [tods, setTodo]=useState([])
    const [inputValue , setInputValue]=useState("")
    const handlTodoAdd=()=>{
        if(inputValue.trim() !== ""){
            const newTodo={
            id:crypto.randomUUID(),
            text: inputValue,
            compolited: false
        }
        setTodo([...tods , newTodo])
        setInputValue("")
      
        }
        
    }
    return(
        <div>
            <h2>To-Do List</h2>
            <input 
            type="text" 
            placeholder="Enter a new to-do"
            onChange={(e)=>setInputValue(e.target.value)}
            value={inputValue}
            />
            <button onClick={handlTodoAdd}>Add</button>
            <ul>
                {
                tods.map(todo=>(
                    <li>{todo.text}</li>
                ))
                }
                    
            </ul>
        </div>
    )

}
export default TodoList;