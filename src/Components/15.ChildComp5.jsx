import React, { Component } from 'react'

class ChildComp5 extends Component {
    render() {
        return (
            <>
                <h3>I am Child Component 5</h3>
                <h4>Data From Child Comp4: {this.props.msg}</h4>
            </>
        )
    }
}

export default ChildComp5