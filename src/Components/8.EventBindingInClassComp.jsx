import React, { Component } from 'react'

class EventBindingInClassComp extends Component {
constructor(props){
    super(props)
    this.userName = "Ramesh"
    this.state = {
        userName:'CoderNamePrasad',

    }
    // 1. EventBinding in class component constructor
    // this.changeUserName = this.changeUserName.bind(this)
}

// This event is binding events in constructor and render method

// changeUserName(){
//     alert("Button Clicked...")
//     console.log(this);
//     this.setState({
//         userName:"JustTryCode"
//     })
// }


// 3. If event function is arrow function then no need to bind
changeUserName = () => {
    console.log(this);
    this.setState({
        userName:'JustTryIT'
    })
}

    render() {
        return (
            <>
                <h2>Event Binding in react class</h2>
                <p>User Name: {this.state.userName}</p>
                {/* <button onClick={this.changeUserName}>Change user name</button> */}

                {/* 2. Event Binding in rendor method */}
                {/* <button onClick={this.changeUserName.bind(this)}>Change user name</button> */}

                {/* 3. Event Binding Using Arrow Function */}
                <button onClick={this.changeUserName}>Change user name</button>
            </>
        )
    }
}
export default EventBindingInClassComp;
