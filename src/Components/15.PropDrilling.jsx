import React, { Component } from 'react'
import ChildComp1 from './15.ChildComp1'

class PropDrilling extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Welcome To the React'
    }
  }

  render() {
    return (
      <div>
        <h2>Prop Drilling</h2>
        <h4>Parent Data Is: {this.state.message}</h4>
        <ChildComp1 msg={this.state.message}/>
        <ChildComp1/>
        
      </div>
    )
  }
}

export default PropDrilling

// class ChildComp1 extends Component {
//   render() {
//     return (
//       <>
//         <h3>I am Child Component 1</h3>
//         <ChildComp2 />
//       </>
//     )
//   }
// }

// class ChildComp2 extends Component {
//   render() {
//     return (
//       <>
//         <h3>I am Child Component 2</h3>
//         <ChildComp3 />
//       </>
//     )
//   }
// }

// class ChildComp3 extends Component {
//   render() {
//     return (
//       <>
//         <h3>I am Child Component 3</h3>
//         <ChildComp4 />
//       </>
//     )
//   }
// }

// class ChildComp4 extends Component {
//   render() {
//     return (
//       <>
//         <h3>I am Child Component 4</h3>
//         <ChildComp5 />
//       </>
//     )
//   }
// }

// class ChildComp5 extends Component {
//   render() {
//     return (
//       <>
//         <h3>I am Child Component 5</h3>
//       </>
//     )
//   }
// }


