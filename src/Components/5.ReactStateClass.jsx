import React, { Component } from "react";
import Props from "./Props";
import PropsInFunctionalComp from './6.PropsInFunctionalComp'
class ReactStateComp extends Component {
  constructor() {
    super();
    this.user = 'Guest'  //avoid 

    this.state = {
      user: "Guest",   // string 
      numberValue: 0, //number
      booleanValue: true, //boolean
      arrayValue: [1, 2, 3, 4, 5, 6, 7, 8, 9], //array
      objectValue: {   //object value
        prop1: 'value1', //string  
        prop2: 'value2', //string
      }

    }

  }
  changeUserName() {
    console.log("Button clicked variable")
    this.user = 'Admin'
    console.log(this.user)
  }
  changeUserNameWithState() {
    console.log("Button clicked State")
    this.setState({
      user: "Admin"
    }, () => console.log(this.state.user))
    //do something wiht updated state value

  }
  render() {
    console.log("Render method called")
    return (
      <>
        <h3>Lets learn state in React class comp</h3>
        <br />
        <h4>User from varible :{this.user}</h4>
        <button onClick={this.changeUserName.bind(this)}>Change User Variable</button>
        <br />
        <h4>User from state :{this.state.user} </h4>
        <button onClick={this.changeUserNameWithState.bind(this)}>Change user State</button>

        <div>
          <h2>Different types of state</h2>
          <p>String :{this.state.user}</p>
          <p>Number:{this.state.numberValue}</p>
          <p>Boolean:{this.state.booleanValue ? 'True' : 'False'}</p>
          <p>Array:{this.state.arrayValue.join(',')}</p>
          {/* array maping we can see in next lecture  */}
          <p>Object: prop1 :{this.state.objectValue.prop1}</p>
          <p>Object: prop2 :{this.state.objectValue.prop2}</p>
          <p>Object with Stringify:{JSON.stringify(this.state.objectValue)}</p>
        </div>
        {/* rendering props comp as child of ReactState class comp */}
        <Props userName={this.state.user} age={30} company={'codemind'} />
        <PropsInFunctionalComp userName={this.state.user} age={30} company={'codemind'} />
      </>
    );
  }
}
export default ReactStateComp;
