import { useReducer, useState } from "react";


const intialState=[];
const reducer= (state , action)=>{
    switch(action.type){
        case "add":
            return [...state , action.payload]
        case "toggol":
            return state.map((todo)=>todo.id === action.payload ? {...todo, completet : !todo.completet}: todo)
        case "delete":
            return state.filter((todo)=> todo.id !== action.payload )
        default:
            return state
    }
}
const TodoAppWithReduce=()=>{
    const [state , dispatch]=useReducer(reducer , intialState)
    const [text , setText]=useState("")
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
         <ul>
            {
                state.map(todo => (
                    <li key={todo.id}>
                        <span 
                        style={{textDecoration :todo.completet ? "line-through" : "none"}}
                        onClick={()=>dispatch({type:"toggol" , payload:todo.id})}
                        >{todo.text}</span>
                        <button onClick={()=>dispatch({type: "delete" , payload: todo.id})}>delete</button>
                    </li>
                ))
            }
         </ul>
        </div>
     )
}
export default TodoAppWithReduce;