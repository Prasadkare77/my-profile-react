import React, { Component } from 'react'

export class FormBasics extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            city: '',
            email: '',
            mobile: ''
        }
    }

    // firstNameChange = (e) => {
    //     console.log("firstNameChange Called");
    //     console.log(e);
    //     this.setState({firstName:e.target.value})
    // }

    // lastNameChange = (e) => {
    //     this.setState({lastName:e.target.value})
    // }

    // changeEmail = (e) => {
    //     this.setState({email:e.target.value})
    // }

    submitFormData = (e) => {
        alert(`FirstName: ${this.state.firstName} LastName: ${this.state.lastName} Email: ${this.state.email}`)
        e.preventDefualit()
    }
    render() {
        return (
            <div>
                <h2>Registration Form</h2>
                <form onSubmit={this.submitFormData} style={{ border: "1px solid black", marginLeft: "450px", marginRight: "450px", padding: "10px" }}>
                    <label>First Name: <input type='text' value={this.state.firstName} onChange={(e) => this.setState({ firstName: e.target.value })}></input>:{this.state.firstName}</label><br /><br />
                    <label>Last Name:<input type='text' value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value })}></input></label><br /><br />
                    <label>Age:<input type='text' value={this.state.age} onChange={(e) => this.setState({ age: e.target.value })}></input></label><br /><br />
                    <label>City:<input type='text' value={this.state.city} onChange={(e) => this.setState({ city: e.target.value })}></input></label><br /><br />
                    <label>Email:<input type='email' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}></input></label><br /><br />
                    <label>Mobile No:<input type='text' value={this.state.mobile} onChange={(e) => this.setState({ mobile: e.target.value })}></input></label><br /><br />
                    <button type='submit'>Submit</button>

                </form>
            </div>
        )
    }
}

export default FormBasics
