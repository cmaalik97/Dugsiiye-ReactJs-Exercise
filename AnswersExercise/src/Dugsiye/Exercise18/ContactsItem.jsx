import React, { useContext } from 'react'
import Contact from './Contact'

function ContactsItem({contact}) {
    const {dispatch , edit , setEdit}=useContext(Contact)

  return (
    <div className='p-2 m-auto'>
        <li>
            <h4 className='font-bold'>{contact.name} {contact.complete ?"⭐":""}</h4>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>

            <button
             className='border rounded p-1 m-1 bg-blue-500'
             onClick={()=>dispatch({type:"toggol" , payload : contact.id})} >{contact.complete ?"UnFavorite":"Favorite"}</button>
            <button 
             className='border rounded p-1 m-1 bg-blue-500'
            onClick={() => setEdit(contact)}
                > Edit</button>
            <button 
             className='border rounded p-1 m-1 bg-blue-500'
            onClick={()=>dispatch({type:"delete" , payload : contact.id})}>Delete</button>

        </li>
    </div>
  )
}

export default ContactsItem
