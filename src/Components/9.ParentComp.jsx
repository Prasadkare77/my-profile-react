import React, { Component } from 'react'
import ChildComp from './9.ChildComp';
class ParentComp extends Component{
    render() {
        const msg = "Welcome to Parent";
      return (
        <div>
          <h4>I am parent component</h4>
          <h6>Data from App Component: {this.props.data}</h6>
          <ChildComp msg={this.props.msg}/>
        </div>
      )
    }
}
export default ParentComp;

