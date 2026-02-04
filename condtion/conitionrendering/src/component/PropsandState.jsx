import { useState } from "react"

export function PropsandState(props){
    const[age,Setage] = useState(20)   // these are the state methods 
    
    
    return(
        <>
        {props.name && "hello this is oprator"}
        <h1>{props.name}  </h1>   // this is the props method
        <h1>{age}</h1>
        <button onClick={()=>{Setage(age+1)}}>increment</button> 
        <button onClick={()=>{Setage(age-1)}}>decrement</button>
       {age == 25 ? <p style={{color:"green"}}>hello you are aligible</p> :<p style={{color:"red"}}>hello you are not eligible </p> }
    </>
    ) 
}