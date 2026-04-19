import { useState } from "react";

function StateEx3(){
    const [name , setName]=useState("");

    const handleChange=(event)=>{
        setName(event.target.value)
        console.log(event.target.value)
    }
   return <>
   <input type="text" value={name} onChange={handleChange} />
   <p>Hello , {name}</p>
   </>

}
export default   StateEx3;