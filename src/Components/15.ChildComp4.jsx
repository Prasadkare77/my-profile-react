import React, { Component } from 'react'
import ChildComp5 from './15.ChildComp5'
class ChildComp4 extends Component {
    render() {
        return (
            <>
                <h3>I am Child Component 4</h3>
                <h4>Data From Child Comp3: {this.props.msg}</h4>
                <ChildComp5 msg={this.props.msg}/>
            </>
        )
    }
}

export default ChildComp4