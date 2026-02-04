import React from "react";
import "./index.css"
export class Props extends React.Component{
    render(){
        return(
            <div className="main">
                <div style={{textAlign:"center"
                    ,display:"grid",background:"orange",width :"350px" ,border:"5px black solid",margin:"10px"}}>
                    <h1>Eemployee Details</h1>
                    <p>E id:{this.props.eid} </p>
                    <p>E Name:{this.props.ename} </p>
                    <p>E Salary: {this.props.esalary}</p>
                    <p>E department:{this.props.edepartment} </p>
                </div>
        </div>
        )   
    }
}