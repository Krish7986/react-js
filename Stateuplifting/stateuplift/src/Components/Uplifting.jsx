import { useState } from "react"

export function Uplifting(){
    const [count ,setCount] = useState(0);
    return(
        <>
        <ChildA count = {count}/>
        <ChildB setCount = {setCount}/>
        <ChildC count = {count} setCount = {setCount} />
        </>
    )
}
export function ChildA({count}){
    return (
        <>
        <h1>count {count}</h1>
        </>
    )
}

export function ChildB({setCount}){
    return(
        <>
        <button onClick={()=>setCount((pre)=>(pre+1))}>increment</button>
        </>
    )
}
export function ChildC({count, setCount}){
    return(
        <>
            <button onClick={()=>{
                if (count <= 0){
                    alert("not negative accept")
                    return
                }
                setCount((prev)=>(prev-1))
            }}>decrement</button>

        </>
    )
}
