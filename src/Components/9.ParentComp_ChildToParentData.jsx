import React, { Component } from 'react'
import ChildComp_ChildToParentData from './9.ChildComp_ChildToParentData'

class ParentComp_ChildToParentData extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          dataFromChildComp:""
        }
      }
      handleDataFromChild = (data) => {
        this.setState({
            dataFromChildComp:data
        })
      }
  render() {
    return (
      <div>
        <h2>Parent Component</h2>
        <h4>Data from child component: {this.state.dataFromChildComp}</h4>
        <ChildComp_ChildToParentData sendDataToParentComp = {this.handleDataFromChild}/>
      </div>
    )
  }
}

export default ParentComp_ChildToParentData
