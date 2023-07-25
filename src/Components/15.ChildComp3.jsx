import React, { Component } from 'react'
import ChildComp4 from './15.ChildComp4'
class ChildComp3 extends Component {
    render() {
        return (
            <>
                <h3>I am Child Component 3</h3>
                <h4>Data From Child Comp2: {this.props.msg}</h4>
                <ChildComp4 msg={this.props.msg}/>
            </>
        )
    }
}

export default ChildComp3