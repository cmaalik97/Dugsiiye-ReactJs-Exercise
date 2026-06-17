import React, { useActionState, useContext } from 'react'
import Contact from './Contact'
import ContactsItem from './ContactsItem'

function ContactsList() {
    const {state}=useContext(Contact)
  return (
    <div>
        <h2>Contacs</h2>
            <ul>
               {state.map((contact)=>(
                <ContactsItem key={contact.id} contact={contact}/>   
            ))
             } 
            </ul>
        
    </div>
  )
}

export default ContactsList
