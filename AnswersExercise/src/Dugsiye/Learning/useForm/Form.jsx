import React from 'react'
import {useForm} from 'react-hook-form'

function Form() {
    const { register, handleSubmit ,watch,  formState:{errors}} = useForm()
    console.log(errors)
    const onSubmit=(data)=>{
        console.log(data)
    }
    const password = watch("password")


  return (
   <form onSubmit={handleSubmit(onSubmit)}> 
    <input type="text" placeholder="Enter your name" {...register("userName",{required: "userName is required"})} />
    {errors.userName && <p className="text-red-500 font-bold">{errors.userName.message}</p>}

    <input type="email" placeholder="Enter your email" {...register("email",{required: "email is required", pattern:{value:/^\S+@\S+$/i, message: "Invalid email format"}})} />
    {errors.email && <p className="text-red-500 font-bold">{errors.email.message}</p>}
    <label htmlfor="password">

    <input type="password" placeholder="Enter your password" {...register("password" , {required: "Password is required",minLength:{value:6, message: "Password must be at least 6 characters"}})} />
    {errors.password && <p className="text-red-500 font-bold">{errors.password.message}</p>}
    </label>

    <label htmlfor="confirmPassword">
    
    <input type="password" placeholder="Confirm your password" {...register("confirmPassword" , {required: "Confirm Password is required", validate:(value)=>value===password || "Passwords do not match"})} />
    {errors.confirmPassword && <p className="text-red-500 font-bold">{errors.confirmPassword.message}</p>}
    </label>

    

    <input type="checkbox" {...register("terms", {required: "You must accept the terms and conditions"})} />
    I accept the terms and conditions
    {errors.terms && <p className="text-red-500 font-bold">{errors.terms.message}</p>}
    <button type="submit">Submit</button>
   </form>
  

   
  )
}

export default Form