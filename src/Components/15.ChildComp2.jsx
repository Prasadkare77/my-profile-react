import React, { Component } from "react"
import ChildComp3 from "./15.ChildComp3"
class ChildComp2 extends Component {
    render() {
        return (
            <>
                <h3>I am Child Component 2</h3>
                <h4>Data From Child Comp1: {this.props.msg}</h4>
                <ChildComp3 msg={this.props.msg}/>
            </>
        )
    }
}

export default ChildComp2