import React, { Component } from 'react'

export class FormAssign extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            dob: '',
            gender: '',
            city: '',
            country: '',
            email: '',
            mobile: '',
            hobbies: ''

        }
    }
    submitData = (e) => {
        console.log(this.state);
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitData}>
                    <label>
                        First Name: <input type='text' value={this.state.firstName} onChange={(e) => this.setState({ firstName: e.target.value })}></input>
                    </label><br /><br />
                    <label>
                        Last Name: <input type='text' value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value })}></input>
                    </label><br /><br />
                    <label>
                        Date of Birth: <input type='date' value={this.state.dob} onChange={(e) => this.setState({ dob: e.target.value })}></input>
                    </label><br /><br />
                    <label>
                        Gender: {this.state.gender}<br />
                        <input type='radio' value={'Male'} checked={this.state.gender === 'Male'} onChange={(e) => this.setState({ gender: 'Male' })}></input>Male
                        <input type='radio' value={'Female'} checked={this.state.gender === 'Female'} onChange={(e) => this.setState({ gender: 'Female' })}></input>Female
                        <input type='radio' value={'Other'} checked={this.state.gender === 'Other'} onChange={(e) => this.setState({ gender: "Other" })}></input>Other
                    </label><br /><br />
                    <label>
                        City: <input type='text' value={this.state.city} onChange={(e) => this.setState({ city: e.target.value })}></input>
                    </label><br /><br />
                    <label>
                        Country:
                        <select value={this.state.country} onChange={(e) => this.setState({ country: e.target.value })}>
                            <option value={""}>Select Country</option>
                            <option value={"India"}>India</option>
                            <option value={"Russia"}>Russia</option>
                            <option value={"Canada"}>Canada</option>
                            <option value={"New York"}>New York</option>
                            <option value={"Bhutan"}>Bhutan</option>
                        </select>
                    </label><br /><br />
                    <label>
                        Email: <input type='email' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}></input>
                    </label><br /><br />
                    <label>
                        Mobile No: <input type='number' value={this.state.mobile} onChange={(e) => this.setState({ mobile: e.target.value })}></input>
                    </label><br /><br />
                    <label>
                        Hobbies:<br />
                        <input type='checkbox' value={this.state.hobbies} onChange={(e) => this.setState({ hobbies: !this.state.hobbies })}></input>Programming
                        <input type='checkbox' value={this.state.hobbies} onChange={(e) => this.setState({ hobbies: !this.state.hobbies })}></input>Travelling
                        <input type='checkbox' value={this.state.hobbies} onChange={(e) => this.setState({ hobbies: !this.state.hobbies })}></input>Swimming
                        <input type='checkbox' value={this.state.hobbies} onChange={(e) => this.setState({ hobbies: !this.state.hobbies })}></input>Watching Movies
                    </label><br /><br />
                    <button type='submit'>Submit</button>
                </form>

            </div>
        )
    }
}

export default FormAssign
