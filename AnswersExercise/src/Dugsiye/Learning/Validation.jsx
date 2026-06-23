import React from 'react'
import { useState } from 'react'

function Validation() {
    const [formData, setFormData]=useState({
        username:'',
        email:''
    })
    const [errors, setErrors]=useState({})

    const validate=()=>{
        const error={}
        if(!formData.username.trim()){
            error.username='Username is required'

        }
        if(!formData.email.trim()){
            error.email='Email is required'
        }
       
       return error;
     
    }
    const handelSubmit=(e)=>{
        e.preventDefault()
        const validationErrors=validate()
        if(Object.keys(validationErrors).length===0){
            // Submit form
        } else {
            setErrors(validationErrors)
        }
    }
    const handelChange=(e)=>{
        const {name, value}=e.target
        setFormData((prevData)=>({...prevData,
            [name]: value
        }))
        if(name==="email" && !value.includes('@')){
            setErrors((prevErrors)=>({...prevErrors, email:'Email is invalid'}))
        } else {
            setErrors((prevErrors)=>({...prevErrors, email:''}))
        }
    }
  return (
    <div>
        <form onSubmit={handelSubmit}>
            <input type="text" name='username' value={formData.username} onChange={handelChange} placeholder='Enter your username'/>
            {errors.username && <span className="text-red-500 border border-red-500">{errors.username}</span>}
           <input type="email" name='email' value={formData.email} onChange={handelChange} placeholder='Enter your email'/>
           {errors.email && <span className="text-red-500 border border-red-500">{errors.email}</span>}
           <button type='submit'>Submit</button>

        </form>
    </div>
  )
}

export default Validation