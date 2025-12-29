import React from "react";

export class State extends React.Component{
    constructor() {
        super();
        this.state = {
            greeting : "hello"
        }
        this.handelevent = this.handelevent.bind(this)
    }
    handelevent(){
        this.setState({
            greeting : "welcome to breakage"
        })
    

    }
    render(){
        return(
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.handelevent}>click</button>
            </div>
        )
    }
}
