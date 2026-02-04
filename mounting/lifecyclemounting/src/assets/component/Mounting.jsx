import React from "react"

export class Mounting extends React.Component{
    constructor(){
        super()
        this.state = {message : "hello everyone"}
        console.log("hello this is constructer - 1")
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({message:"hii everyone render 3 i think"})
        },2000)
        console.log("this is mount render 3")
    }
    render(){
        console.log("this is render 2")
        return(
            <h1>{this.state.message}</h1>
        )

        
    }
}