import React from "react";

export class State extends React.Component {
    constructor() {
        super();
        this.state = {
            greeting: "hello"
        };
    }

    handleEvent() {
        this.setState({
            greeting: "good morning everyone"
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={()=>{this.handleEvent()}}>click here</button>
            </div>
        );
    }
}

 