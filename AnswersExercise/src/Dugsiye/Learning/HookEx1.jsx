import { useEffect, useState } from "react";

function HookEx1(){
    // this example is changing Title
    // document.title="Abdimalik Mohamud"; hadaan qaabkan  isticmaalno isbadal walboo dhaca wuu sameena marka waxan kuxaleena useEffect
    const [title , setTitle]=useState("Hello , React")
    const [name , setName]=useState("cmalik");


    useEffect(()=>{
        document.title=title;

        console.log(title)
    },[title ])

    return (

    
    <div>
        <h2>Type to change to document title</h2>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <input 
        type="text"
        value={title}
        onChange={(e)=>setTitle(e.target.value)} />
    </div>
    )
}
export default HookEx1;