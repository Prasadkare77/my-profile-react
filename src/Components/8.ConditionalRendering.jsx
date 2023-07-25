import React, { Component } from "react";

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        <h2>Condtional Rendering</h2>
        // {/* 1. Conditional rendering using If else..... */ }
        // if (this.state.isLoggedIn) {
        //     return <h2>Welcome to Codemind</h2>
        // } else {
        //     return <h2>Please Login First</h2>
        // }

        {/* 2. Conditional rendering using Variable..... */ }
        // let message;
        // if (this.state.isLoggedIn) {
        //     message = <h2>Welcome to Codemind</h2>
        // } else {
        //     message = <h2>Please Login First</h2>
        // }
        // return message;

        {/* 3. Conditional rendering using Ternary operator..... */ }
        // return this.state.isLoggedIn ? <h2>Welcome to Codemind</h2> : <h2>Please Login First</h2>

        {/* 4. Conditional rendering using Short Circuit..... */ }
        return this.state.isLoggedIn && <h2>Welcome to Codemind</h2>
    }
}
export default ConditionalRendering;