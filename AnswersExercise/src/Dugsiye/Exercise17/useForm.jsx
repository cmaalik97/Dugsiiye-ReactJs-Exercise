import React, { useState } from 'react'

function useForm(intialValue) {
    const [values, setValue]=useState(intialValue)
    const handelChange=(event)=>{
        const {name , value}=event.target;
        setValue({...values, [name]:value})
    };
   
   
    return {values, handelChange};
}

export default useForm