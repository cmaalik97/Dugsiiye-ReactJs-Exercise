import Contact from './Contact'
import { intialValue, reducer } from './reducer'

import ContactsList from './ContactsList'
import ContactsForm from './ContactsForm'
import { useReducer, useState } from 'react'

function ContactsApp() {
    const [state , dispatch]=useReducer( reducer, intialValue)
    const [edit , setEdit]=useState(null)
  return (
   <Contact.Provider value={{state , dispatch , edit , setEdit}}>
    <h1>Contac Management App</h1>
   <ContactsForm/>
   <ContactsList/>
   </Contact.Provider>
  )
}

export default ContactsApp