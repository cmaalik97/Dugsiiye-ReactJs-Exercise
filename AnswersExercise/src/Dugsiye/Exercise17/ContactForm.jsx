import React from 'react'
import useForm from './useForm'

function ContactForm() {
    const {values,handelChange}=useForm({
        name:'',
        email:'',
        message:'',
    })
    const handelSubmit=(event)=>{
        event.preventDefault();
        console.log("Form Data:", values)
    }
  return (
    <form onSubmit={handelSubmit}>
        <div>
            <label>
                Name: <input type="text" required placeholder='Enter Name' name='name' value={values.name} onChange={handelChange}/>
            </label>
        </div>
        <div>
            <label>
                Email: <input type="email" required placeholder='Enter Email' name='email' value={values.email} onChange={handelChange}/>
            </label>
        </div>
        <div>
            <label>
                message: <textarea type="text" required placeholder='Enter Message' name='message' value={values.message} onChange={handelChange}/>
            </label>
        </div>
        <button type='submit'>Submit</button>
    </form>
   
  )
}

export default ContactForm