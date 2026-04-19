import { useState } from "react";
function StateEx2(){
   const [isVisible , SetVisible]=useState(false);
   const toggole=()=>{
    SetVisible(!isVisible)
    
    
   }
    return <>
    
    <button onClick={toggole}> {isVisible ? "Hide" :" Show"} Message</button>
    
    {isVisible && <p>Hello Somalia</p>}
    </>
}
export default StateEx2;