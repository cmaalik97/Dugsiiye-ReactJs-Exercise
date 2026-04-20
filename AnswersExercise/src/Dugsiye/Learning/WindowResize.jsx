import { useEffect, useState } from "react";

function WindowResize(){
    const [Width , setWidth]=useState(window.innerWidth)

    useEffect(()=>{
        const handleResize=()=>setWidth(window.innerWidth);
        
        window.addEventListener("resize", handleResize)
        return ()=>{
            window.removeEventListener("resize", handleResize)
        }
    },[])
    return (
        <>
        <h2>Window Width:{Width}</h2>
        </>
    )
}
export default WindowResize;