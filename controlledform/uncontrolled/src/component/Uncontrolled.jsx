import { useRef } from "react"

export default function Uncontrolled(){
    const inputref= useRef(null)
    const handelref = ()=>{
        alert(`hello ${inputref.current.value}`)
    }
    return(
        <>
        <form onSubmit={handelref}>
            <input type="text" ref={inputref} />
            <button type="onSubmit">submit</button>
        </form>
        </>
    )

}