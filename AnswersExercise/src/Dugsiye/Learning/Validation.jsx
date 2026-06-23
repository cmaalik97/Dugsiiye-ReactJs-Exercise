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
            // Submit form   object.keys username and email
            //also note the object.keys(validationErrors) will return an array of the keys in the validationErrors object, which will be empty if there are no errors.
            console.log('Form submitted:', formData)
            console.log("object.keys", Object.keys(validationErrors))
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
        <form onSubmit={handelSubmit} className="flex flex-col gap-2 w-1/3 mx-auto mt-10">

            <input 
            className="border border-black rounded px-2 py-1"
            type="text" 
            name='username' 
            value={formData.username} 
            onChange={handelChange} 
            placeholder='Enter your username'/>

            {errors.username && 
            <span className="text-red-500 border border-red-500">
                {errors.username}
                </span>}

            <br/>
           <input 
           className="border border-black rounded px-2 py-1"
           type="email" 
           name='email' 
           value={formData.email} 
           onChange={handelChange} 
           placeholder='Enter your email'/>

           {errors.email && 
           <span className="text-red-500 border border-red-500">
            {errors.email}</span>}
           <br/>
           <button type='submit' className="bg-blue-500 mt-2 text-white px-2 py-2 rounded">Submit</button>

        </form>
    </div>
  )
}

export default Validation