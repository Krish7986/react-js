import { useState } from "react";
export function Terinary(){
    const[loggedin,setloggedin] = useState(true)
    return(
         <>
         <h1>{loggedin ? "welcome to page" : "please login"}</h1>
         <button onClick={()=>{setloggedin(!loggedin)}}>{loggedin ? "logout" : "login"}</button>
         </>
    )
}