import { useState } from "react";
function StateEx1(){
    const [count ,setCount ]=useState(0);

    const increment=()=>{
        setCount(count + 1);
        console.log(count)
    }
    
    return <>
    <p>You clicked {count} times</p>
    <button onClick={increment}>Click me</button>
    </>
}
export default StateEx1;