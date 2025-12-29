import React from "react";
export class State2 extends React.Component{
    constructor() {
        super();
        this.state=({name :"krishna"})
    }
    handelevent(){
        this.setState({name:" is gone"})
    }
    render(){
        return(
            <>
            <h1>hello my name {this.state.name}</h1>
            <button onClick={()=>{this.handelevent()}}>click</button>
            </>
        )
    }
}

