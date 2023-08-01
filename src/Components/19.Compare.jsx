import React, { Component } from 'react'

export class Compare extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Prasad'
      }
    }
    
  render() {
    return (
      <div>
        Name:{this.state.name}
        <button onClick={()=>this.setState({name:'Sachin'})}>Change</button>
      </div>
    )
  }
}

export default Compare
