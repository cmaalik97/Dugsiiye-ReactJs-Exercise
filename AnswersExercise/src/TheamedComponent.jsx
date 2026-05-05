import React, { useContext } from 'react'
import TheamContext from './TheamContext'


export default function TheamedComponent() {
   const theme=useContext(TheamContext)

   const style={
    backgroundColor:theme === "light" ? "#fff" : "#333",
    color:theme === "light" ? "#000" : "#fff",
    padding: '20px',
    textAlign: 'center'
   }
  return (
    <div style={style}>
        thid is a {theme}-themed componen
        
    </div>
  )
}
