import { createContext, useState } from "react"
import { Child } from "./Child"
import { Childern } from "./Childern"

export const Usercontext = createContext()
export function ContextAPI(){
    const [user,setUser] = useState("hari")
    return(
        <Usercontext.Provider value={{user,setUser}}>
            {/* <Child /> */}
            <Childern />
        </Usercontext.Provider>
    )
}