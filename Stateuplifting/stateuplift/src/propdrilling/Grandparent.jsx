export function Grandparent(){
    const name = "hari krishna"
    return <Parent name = {name}/>
}
export function Parent({name}){
    return <Child name = {name} />
}
export function Child({name}){
    return <Grandchild  name = {name}/>
}

export function Grandchild({name}){
    return <h1>{name}</h1>
}