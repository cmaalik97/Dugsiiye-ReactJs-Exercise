import React, { useContext } from 'react'
import LanguageContext from './LanguageContext'

export default function Greeting() {
    const language=useContext(LanguageContext)
    const message={
        en:"Hello",
        es:"!Hola",
    }
  return (
    <div>
        <h1>{message[language]}</h1>
    </div>
  )
}
