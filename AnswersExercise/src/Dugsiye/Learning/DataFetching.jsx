import { useEffect, useState } from "react";

function DataFetching(){

    const [users, setUsers]=useState([])
    const [loading , setLoading]=useState(false)

    useEffect(()=>{
        const fetchUsers=async()=>{

            setLoading(true)
            // await new Promise((resolve)=>setTimeout(resolve , 10000));
        
            try {
               const respond=await fetch("https://jsonplaceholder.typicode.com/users") 
               const data= await respond.json();
               setUsers(data)
            setLoading(false)
            } catch (error) {
                console.error("error", error)
            }
        }

        fetchUsers()
    },[])

    if(loading)return <h1>Loading....</h1>

    return(
        <>
    <h2>List Of Users</h2>
        <ul>
            {
             users.map((u)=>(
                <li>{u.name}</li>
             ))   
            }
        </ul>
        </>
    )
}
export default DataFetching;