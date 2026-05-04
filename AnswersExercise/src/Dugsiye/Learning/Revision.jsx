import { useState } from "react";

function Revision(){
    // todolist revision
    const [inputValue , setInputValue]=useState("")
    const [todo, setTodo]=useState([])

    const handle=()=>{
        const newtodo={
            id:Date.now(),
            text:inputValue.trim(),
            completed:true
        }

        setTodo([...todo,newtodo])
        setInputValue("")
         console.log(todo)
    }
   
return(
    <>
    <h1>To-Do List </h1>
    <input type="text" 
        placeholder="Enter a new to-do"
        onChange={(e)=>setInputValue(e.target.value)}
        value={inputValue}
    />
    <button onClick={handle}>Add</button>

    <ul>
    {
        todo.map(x=>(
           <li>{x.text}</li> 
        ))
    }
    </ul>
   
    </>
)
}
export default Revision;