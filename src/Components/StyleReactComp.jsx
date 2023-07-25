import React, { Component } from 'react'
import './styleComp.css'
export class StyleReactComp extends Component {
  render() {
    const heading = {
        color:'yellow'
    }
    return (
      <div>
        {/* Inline CSS */}
        <h1 style={{color:'red'}}>Apply Inline style on me</h1>

        {/* Internal CSS */}
        <h1 style={heading}>Apply Internal style on me</h1>

        {/* External CSS */}
        <h1 className="h1Heading">Apply External style on me</h1>
      </div>
    )
  }
}

export default StyleReactComp
