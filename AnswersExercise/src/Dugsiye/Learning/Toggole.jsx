import { useState } from "react";

function Toggole(){
    const [isVisible , setIsvisible]=useState(true)
    const toggol=()=>setIsvisible(!isVisible);
    return (
        <div>
            <button onClick={toggol}>{isVisible ? "Hide" : "Show"} Message</button>
            {isVisible && <p>The Toggole Message </p>}
        </div>
    )
}
export default Toggole;