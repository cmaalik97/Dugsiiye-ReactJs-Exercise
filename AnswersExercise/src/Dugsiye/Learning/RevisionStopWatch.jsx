import { useEffect, useState } from "react";

function RevisionStopWatch(){
    const [time , setTime]=useState(0)
    const [isRunning, setIsRunning]=useState(false)

    useEffect(()=>{
        let timeId;
        if(isRunning){
        timeId=setInterval(()=>
       setTime((prev)=> prev+1)
        ,1000)
        }
       

        return ()=>clearInterval(timeId)

    },[isRunning])

    const startTime=()=>{
        setIsRunning(true)
    }
    const stopTime=()=>{
        setIsRunning(false)
    }
    const resetTime=()=>{
        setIsRunning(false)
        setTime(0)
    }

    return (
        <>
        <h1>Stop-Watch {time} Second</h1>
        <button disabled={isRunning} onClick={startTime}>Start</button>
        <button disabled={!isRunning} onClick={stopTime}>Stop</button>
        <button onClick={resetTime}>Reset</button>
        </>
    )
}
export default RevisionStopWatch;