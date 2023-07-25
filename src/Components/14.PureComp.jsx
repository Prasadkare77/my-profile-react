import React, {PureComponent, Component } from 'react'

class PureComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementCount=()=>{
        this.setState({count:this.state.count+1})
    }
  render() {
    console.log(`Render Method Called`);
    return (
      <div>
        <h2>This is Pure Comp</h2>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.incrementCount}>+</button>
      </div>
    )
  }
}

export default PureComp
