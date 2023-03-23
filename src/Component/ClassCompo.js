import { Component } from "react"

class ClassCompo extends Component{
    render(){
        return(
            <>
            <div className="box2">
            <h1>This is created using class Component</h1>
            <p>This is Done by using External CSS</p>
            <p style={{color:"blue"}}>This is Done by using Inline CSS</p>
            </div>
            </>
        )
    }
}
export default ClassCompo;