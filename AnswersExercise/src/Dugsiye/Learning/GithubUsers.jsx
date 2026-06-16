import React, { useEffect, useState } from 'react'

export const GithubUsers = () => {
    const [data , setData]=useState(null)
    const [loading , setLoading]=useState(true)
    const [error , setError]=useState(null)

    useEffect(()=>{
        let isMounted=true;
        const fetchData= async()=>{
            try{
                const respond = await fetch(`https://api.github.com/users/cmaalik97`)
                if(!respond.ok){
                    throw new Error(`HTTP error! status: ${respond.status}`)
                }
                const result= await respond.json();
                if(isMounted){
                    setData(result)
                    setLoading(false)
                }
            }catch(error){
                if(isMounted){
                    setError(null)
                    setLoading(false)
                }
            }

            
        }
    },[])
  return (
    <div>GithubUsers</div>
  )
}
