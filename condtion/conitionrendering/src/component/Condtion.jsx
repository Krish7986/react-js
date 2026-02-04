import { useState } from "react"

export function Condtion({name,children}){
    const[age,setage] = useState(0)
    return(
        <div>
      
            <h1>{name}</h1>
            <h2>{children}</h2>
            <h1>age is : {age}</h1>
            <button onClick={()=>{setage(age+1)}}>incerment</button>

           
        </div>
    )
}
