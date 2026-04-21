import { useEffect, useState } from "react";

function Countdown(){
    //Time
    const [intialTime , setInitialTime]=useState(30);
    const [timeleft ,  setTimeLeft]=useState(30);
    const [isRunning , setIsRunning]=useState(false);

    useEffect(()=>{
        let timeId;
        if(isRunning && timeleft > 0){
            timeId=setInterval(()=>{
                setTimeLeft((prev)=> prev - 1)
            },1000)
        }
        return ()=>clearInterval(timeId)
    },[isRunning, timeleft])
    const startBtn=()=>{
        if(timeleft > 0 ){
            setIsRunning(true)
        }
    }

    const stopBtn=()=>{
        setIsRunning(false)
    }
    const resetBtn=()=>{
        setIsRunning(false)
        setTimeLeft(intialTime)
    }
    const changeInput=(e)=>{
        const value =Number (e.target.value)
        setInitialTime(value)
        setTimeLeft(value)
        setIsRunning(false)
    }

    return(
        <>
        <h2>Countdown Timer</h2>
        <label >Set Time (seconds )</label>
        <input 
        type="number" 
        value={intialTime} 
        onChange={changeInput} />
        <p>Time left  : {timeleft} seconds</p>
        <button disabled={isRunning || timeleft === 0} onClick={startBtn}>Start</button>
        <button disabled={!isRunning} onClick={stopBtn}>Stop</button>
        <button onClick={resetBtn}>Rest</button>
        </>
       
    )

}
export default Countdown;