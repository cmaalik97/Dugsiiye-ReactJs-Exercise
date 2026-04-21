import { useEffect, useState } from "react";

function MouseTracker(){

   const [coords, setCoords]=useState({x:0 , y:0})
 
   useEffect(()=>{
    const handleMouseMove=(e)=>{
      setCoords({x:e.clientX, y:e.clientY});
    };
    window.addEventListener("mousemove" , handleMouseMove)
    //cleaning
    return ()=>{
      window.removeEventListener("mousemove" , handleMouseMove)
    }

    

   },[])
return (
    <>
    <h2>Mouse X:{coords.x}</h2>
    <h2>Mouse Y: {coords.y}</h2>
     
    </>
)
}
export default MouseTracker;