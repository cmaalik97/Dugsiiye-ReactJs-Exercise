import { useState } from "react";

function ConditonRendering(cmaalik){
    // login basics
    const [isLogin , setIsLogin ]=useState(false)
    return (
        <div>

        {isLogin ? (<p>Welcome !!</p>): (<p>Sign Up</p>)}
        </div>
    )
}
export default ConditonRendering;