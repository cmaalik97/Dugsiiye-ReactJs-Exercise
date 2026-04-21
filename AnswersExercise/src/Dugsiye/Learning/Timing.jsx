import { useEffect, useState } from "react";

function Timing(){
    const [time, setTime]=useState(0)
    const [isRunning , setIsRunning]=useState(false)
    useEffect(()=>{
        let timeID;
        if(isRunning){
            ///1000ms wa 1s
         timeID= setInterval(()=>{
            setTime((prev)=> prev +1 )
        },1000)
        }
        //celeaning
        return()=>clearInterval(timeID)
    },[isRunning])

   const startBtn=()=>{
        setIsRunning(true)
       
   }
   const stopBtn=()=>{
    setIsRunning(false)
   }
   const resetBtn=()=>{
    setIsRunning(false)
    setTime(0)
   }
    return(
        <>
        <h1>Stopwatch {time} sec</h1>
        <button disabled={isRunning} onClick={startBtn}>Start</button>
        <button  disabled={!isRunning} onClick={stopBtn}>Stop</button>
        <button onClick={resetBtn}>Reset</button>
        </>
    )
}
export default Timing;