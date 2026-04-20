import { useEffect, useState } from "react";

function TitlChange(){
    const [title , setTitle]=useState("Hello")
    const [name , setName]=useState("")
    useEffect(()=>{
        // if(name === ""){
        //     document.title="Welcome"
        // }
        // else{
        //      document.title= title +" " + name;
        // }
       document.title=name.trim()=== "" ?"welcome": title + " "+ name;
       
       
    },[title , name])

    return(

    
    <>
    <h2>Enter Your Name</h2>
     <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <h2>Choose a Greeting</h2>
    <input 
    type="text"
    value={title}
    onChange={(e)=>setTitle(e.target.value)}/>
   
   
    </>
    )
}
export default TitlChange;