import React, { Component, createRef } from 'react'

class Ref extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus();
    }
    
  render() {
    return (
      <div>
        <h2>Reference in Class Component</h2>
        User Name: <input type='text' name='id' ref={this.inputRef}></input>
      </div>
    )
  }
}

export default Ref
