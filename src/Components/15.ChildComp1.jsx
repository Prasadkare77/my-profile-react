import React, { Component } from "react"
import ChildComp2 from "./15.ChildComp2"
class ChildComp1 extends Component {
    render() {
        return (
            <>
                <h3>I am Child Component 1</h3>
                <h4>Data From Parent Comp: {this.props.msg}</h4>
                <ChildComp2 msg={this.props.msg}/>
            </>
        )
    }
}
export default ChildComp1