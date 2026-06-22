import React from 'react'
import { useState } from 'react'

function Registeration() {
    const [formData, setFormatData] = useState({
        username: '',
        email: '',
        Password: '',
        checkbox: false,
        select: '',
        })
        const handelSubmit = (e) => {
            e.preventDefault()
            console.log("submitted data:", formData)
        }
        const handelChange = (e) => {
            const {name, value, type, checked} = e.target;
            setFormatData((prevData)=> ({...prevData, [name]: type === 'checkbox' ? checked : value}))
        }
  return (
    <div>
        <form onSubmit={handelSubmit}>
            <input
            className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
             type="text" name="username" placeholder="Username" value={formData.username} onChange={handelChange} />
            <input
            className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
             type="email" name="email" placeholder="Email" value={formData.email} onChange={handelChange} />
            <input
            className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
             type="password" name="Password" placeholder="Password" value={formData.Password} onChange={handelChange} />
            <input
            className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
             type="checkbox" name="checkbox" checked={formData.checkbox} onChange={handelChange} />
            <select 
            className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={formData.select} onChange={handelChange} name="select">
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            
           < button 
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'
           type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Registeration