import React, { Component } from 'react'

class LifeCycle extends Component {
    constructor(props) {
        super(props)
        console.log(`Constructor Called...`);

        this.state = {
            message:"Welcome to LifeCycle"
        }
    }
    //First method called in mounting and updating phase one
    static getDerivedStateFromProps(props, state) {
        console.log(`getDerivedStateFromProps called...`);
        // return(message:props.msg);
        return null;
    }

    // Update 2 method called
    shouldComponentUpdate(){
        console.log(`shouldComponentUpdate Called...`);
        return true;
    }

    // After render getSnapshotBeforeUpdate
    getSnapshotBeforeUpdate(){
        console.log(`getSnapshotBeforeUpdate Called...`);
        return null;
    }
    // After getSnapshotBeforeUpdate componentDidUpdate call
    componentDidUpdate(){
        console.log(`componentDidUpdate Called...`);
    }

    componentDidMount() {
        console.log(`ComponentDidMount Called`);
        // For API Call
    }

    render() {
        console.log(`Render Method called...`);
        return (
            <div>
                <h2>React Life Cycle Method</h2>
                {this.state.message}
                <button onClick={()=>this.setState({message:"Welcome to React"})}>Update</button>
            </div>
        )
    }
}

export default LifeCycle
