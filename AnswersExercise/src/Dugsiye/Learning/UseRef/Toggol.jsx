import React, { useEffect } from 'react'

function Toggol() {
    const cardRef = React.useRef(null)
    
   const toggol = () => {
    if(cardRef.current){
        cardRef.current.classList.toggle('bg-red-500')
        }
        
   }

  return (
    <div className='h-screen w-screen bg-black flex flex-col justify-center items-center'>
        <div ref={cardRef} className='h-50 w-50 m-auto mt-50 border text-center '>
            <h1 className='text-white text-2xl font-bold'>Toggol</h1>
        </div>
        <button onClick={toggol} className='text-center bg-red-500 p-2 rounded text-white m-auto  '>togol</button>
    </div>
  )
}

export default Toggol;