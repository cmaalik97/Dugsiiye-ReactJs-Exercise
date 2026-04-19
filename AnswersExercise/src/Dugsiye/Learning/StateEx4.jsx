import { useState } from "react";

function StateEx4(){
    const [user , setUser]=useState({name:"Alice" , Age :25 ,  Bio :"full Stock"})
    const Increase=()=>{
        setUser({...user , Age :user.Age+1})
    }

    return <>
    <p>name: {user.name} , Age: {user.Age} , Bio: {user.Bio}</p>
    <button onClick={Increase}>Increase Age</button>
    </>
}
export default StateEx4;