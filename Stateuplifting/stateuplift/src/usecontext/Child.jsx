import { useContext } from "react"
import { Usercontext } from "./ContextAPI"

 export function Child(){
    const {user ,setUser} = useContext(Usercontext)
    return(
        <>
        <h1>{user}</h1>
        <button onClick={()=>setUser("i am developer")}>change name</button>
        </>
    )
} 
