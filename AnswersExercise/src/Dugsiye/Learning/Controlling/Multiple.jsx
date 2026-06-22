import React from 'react'

function Multiple() {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
    })
    const onSubmit = (e) => {
        e.preventDefault()
        console.log("submitted data:", formData)
    }
    const handleChange = (e) => {
        const {name, value}=e.target;
        setFormData((prevData)=> ({...prevData , [name]: value}))
    }
  return (
    <div>
        <h1 className='text-3xl font-bold text-center mt-10'>Multiple Inputs</h1>
        <form onSubmit={onSubmit}>
        <input className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 '  type="text" name="firstName" placeholder="Enter First Name" value={formData.firstName} onChange={handleChange}/>

        <input className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" name="lastName" placeholder="Enter Last Name" value={formData.lastName} onChange={handleChange}/>

        <input className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange}/>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md' type="submit">Submit</button>
        </form>


    </div>
  )
}

export default Multiple