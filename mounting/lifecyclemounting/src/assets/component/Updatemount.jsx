import React from "react";

export class Updatemount extends React.Component{
    constructor(){
        super();
        this.state = {count : 0}
        console.log("this first render 1")

    }
    increment = ()=>{
        this.setState({count : this.state.count + 1})
    }
    componentDidUpdate(prevprops, preState){
        console.log("hello this is updatemodel")
        console.log("this is previous",preState.count)
        console.log("this is the part",this.state.count)
        console.log("this is the render 3")
    }
    render(){
        console.log("this is from render 2")
        return(
            <>
            <h1>{this.state.count}</h1>
            <button onClick={this.increment}>increment</button>
            </>
        )
    }
    
} 