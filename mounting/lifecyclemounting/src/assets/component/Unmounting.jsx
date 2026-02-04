import React from "react";

 export class Unmounting extends React.Component{
    componentDidMount(){
        this.timer = setInterval(()=>{
            console.log("set interval done")
        },2000)
    }
    componentWillUnmount(){
        console.log("helo rendering is cleared ")
        clearInterval(this.timer)   
    }
    render(){
        console.log("render umtipe time")
        return(
            <>
            
            <h1>hello this is unmounting render</h1>
            </>
        )
    }
}