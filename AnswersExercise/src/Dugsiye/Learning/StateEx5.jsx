import { useState } from "react";

function StateEx5(){

    const [items ,setItem]=useState(["Apple", "Banna"])
    const addFruit=()=>{
        setItem([...items,"orange"])
    }
    return <>
    <ul>

    
   {
    items.map(item =>(
       <li>{item}</li> 
    ))
   }
   </ul>
   <button onClick={addFruit}>Add item</button>
    </>
}
export default StateEx5;