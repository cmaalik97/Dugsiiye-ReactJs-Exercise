import React, { useContext, useState , useEffect} from 'react'
import Contact from './Contact'

function ContactsForm() {
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [number , setNumber]=useState("")
     const {dispatch , edit , setEdit}=useContext(Contact)
     
    useEffect(() => {
     if (edit) {
    setName(edit.name)
    setEmail(edit.email)
    setNumber(edit.phone)
     }
    }, [edit])


    // ADDING
    const  handelAdd=()=>{
        if(name.trim() && email.trim() && number.trim()){
            const newContact={
                id:Date.now(),
                name,
                email,
                phone:number,
                complete:false
            }
            dispatch({type:"add" , payload:newContact})
             setName("")
             setEmail("")
            setNumber("")
        }
    }   
    

    // UPDATIN
    const handleUpdate = () => {
     dispatch({
    type: "edit",
    payload: {
      id: edit.id,
      name,
      email,
      phone: number
    }
  })

  setEdit(null)
  setName("")
  setEmail("")
  setNumber("")
}


  return (
    <div>
        <h1>Add New Contacts</h1>
        <label >Name: <input type="text" 
        className='border rounded p-1 m-1'
        value={name} 
        onChange={(e)=>setName(e.target.value)} 
        placeholder='Enter Name' 
        required /></label> <br />

        <label >Email: <input type="email" 
         className='border rounded p-1 m-1'
        value={email} 
        onChange={(e)=>setEmail(e.target.value)} 
        placeholder='Enter Email' 
        required /></label> <br />

        <label >Phone: <input type="number" 
         className='border rounded p-1 m-1'
        value={number} 
        onChange={(e)=>setNumber(e.target.value)} 
        placeholder='Enter Phone' 
        required /></label> <br />
        
        {edit ? (
        <div>
        <button 
         className='border rounded p-1 m-1 bg-blue-500' 
        onClick={handleUpdate}>Update</button>
        <button 
         className='border rounded p-1 m-1 bg-blue-500'
        onClick={() => {
        setEdit(null)
        setName("")
        setEmail("")
        setNumber("")
             }}>Cancel
        </button>
         </div>
        ) : (<button
         className='border rounded p-1 m-1 bg-blue-500'
         onClick={handelAdd}>Add</button>)}

    </div>
  )
}

export default ContactsForm