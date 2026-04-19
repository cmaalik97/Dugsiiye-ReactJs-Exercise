import { useState } from "react";

function ToggoleButton(){
    const [isChange, setChange]=useState(true)

    const change=()=>{
        setChange(!isChange)
    }
    return <>
   
    <p>The button is  {isChange ? "On " : "Off"} </p>
    <button onClick={change}>Turn {isChange ? "Off" : "On"}</button>
    </>
}
export default ToggoleButton;