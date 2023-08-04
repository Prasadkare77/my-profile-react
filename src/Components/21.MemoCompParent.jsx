import React, { Component } from 'react'
import MemoComp from './21.MemoComp'

export class MemoCompParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
      }
    }

    handleIncrement=()=>{
        this.setState((preState)=>({
            count: preState.count+1
        }))
    }
    
  render() {
    console.log(`Parent MemoComponent Renderd`);
    return (
      <div>
        <h2>This is Memo Parent</h2>
        Count:{this.state.count} <button onClick={this.handleIncrement}>+</button>
        <MemoComp count={this.state.count}/>
      </div>
    )
  }
}

export default MemoCompParent
