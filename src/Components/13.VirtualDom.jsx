import React, { Component } from 'react'

export class VirtualDom extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
      }
    }
    
  render() {
    const {count} = this.state
    return (
      <div>
        Count: {count} <button onClick={()=>this.setState({count:count+1})}>+</button>
      </div>
    )
  }
}

export default VirtualDom
