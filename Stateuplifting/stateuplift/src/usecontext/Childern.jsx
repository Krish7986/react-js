import { Usercontext } from "./ContextAPI";


export function Childern(){
    
    return(
        <Usercontext.Consumer>
            {({user,setUser})=>(
                <>
                <h1>hello {user}</h1>
                <button onClick={()=>setUser("there i am developer")}>change</button></>
                )}
           
        </Usercontext.Consumer>
    )

}