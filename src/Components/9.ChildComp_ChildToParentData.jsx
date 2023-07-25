import React, { Component } from 'react'

export class ChildComp_ChildToParentData extends Component {
  constructor(props){
    super(props)

    this.state = {
      message:"Welcome to codmind React Session"
    }
  }
  sendData = () => {
    this.props.sendDataToParentComp(this.state.message)
  }
  render() {
    return (
      <div>
        <h2>Child Component</h2>
        <button onClick={this.sendData}>Send Data To Child Comp</button>
      </div>
    )
  }
}

export default ChildComp_ChildToParentData;
