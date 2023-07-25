import React, { Component } from 'react'

class ChildComp extends Component{
    render() {
      return (
        <div>
          <h4>I ama child component</h4>
          <h6>Data from app Comp : {this.props.msg}</h6>
        </div>
      )
    }
}
export default ChildComp;