import { useState } from "react";

function Counter(){
    const [count , setCount]=useState(0)
    const decrement=()=>{
        count >0 && (setCount (count -1))
        
    }
    const increment=()=>{
        setCount(count + 1)
    }
    return (
        <div>
            <h2>Counter:{count}</h2>
            <button onClick={decrement} disabled={count === 0}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default Counter;