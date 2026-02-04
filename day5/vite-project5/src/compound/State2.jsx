import React from "react";
export class State2 extends React.Component{
    constructor() {
        super();
        this.state=({name :"krishna is my crush is",
            count:0
        })
        this.handelevent = this.handelevent.bind(this)
        this.returnevent = this.returnevent.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    handelevent(){
        this.setState({name:"your name is``````gone"})
    }
    returnevent(){
        this.setState({name:"krishna this is construct binding"})
    }
    incremenr =()=>{
        this.setState({count : this.state.count+1})
    }
    decrement(){
        this.setState({count:this.state.count-1})
    }
    inlinenind(){
        this.setState({name:"krishna this is inline bind"})
    }    render(){
        return(
            <>
            <h1>hello my name {this.state.name}</h1>
            <button onClick={()=>{this.handelevent()}}>click</button>
            <button onClick={this.returnevent}>consturct bind</button>
            <button onClick={this.inlinenind.bind(this)}>inline binb</button>
            <h2>{this.state.count} passing class arrow function</h2>
            <button onClick={this.incremenr}>increment</button>
            <button onClick={this.decrement}>decrement</button>
            </>
        )   
    }
}

