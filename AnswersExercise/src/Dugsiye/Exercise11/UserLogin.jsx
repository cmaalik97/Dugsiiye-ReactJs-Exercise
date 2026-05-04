import { useState } from "react";

function UserLogin(){
    const [userName , setUserName]=useState("")
    const [password , setPassword]=useState("")
    const [isLogin , setIsLogin]=useState(false)

    const handle=()=>{
        userName && password != "" ? (setIsLogin(!isLogin)): (alert("fill spaces correctly"))
      
    }
    return (
        <>
            <h1>Login</h1>
           
              {isLogin != true ? (
                
                <div>
               <p>UserName: <input type="text" required value={userName} onChange={(e)=>setUserName(e.target.value.trim())} />
                </p>
                
                <p> 
                Password: <input type="password"  required value={password} onChange={(e)=>setPassword(e.target.value.trim())}/>
                </p>
               </div>
              ): (
                <h1>Welcome , {userName}</h1>
              )}
             
           
              <button onClick={handle}>{isLogin ? "LogOut" : "LogIn"}</button>
           
          
            
        </>
    )
}
export default UserLogin;