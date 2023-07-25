import React, { Component } from 'react'

export class FormAdvance extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      isSubscribed: false,
      gender: '',
      country: '',
      errorName:{
        // name: '',
        // email: '',
        // isSubscribed: false,
        // gender: '',
        // country: ''
      }
    }
  }
  handleSubmit = (e) => {
    // alert(this.state)
    if (this.state.name ===" ") {
      this.setState({errorName:'Name is Required'})
      
    }
    console.log(this.state);
    e.preventDefault()
  }
  render() {
    return (
      <div>
        <h2>Form Handling In React</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name: <input type='text' value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}></input>
            <span>{this.state.errorName}</span>
          </label><br /><br />
          <label>
            Email: <input type='email' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}></input>
            {this.state.email}
          </label><br /><br />
          <label>
            Subcribe to newsLetter: <input type='checkbox' checked={this.state.isSubscribed} onChange={(e) => this.setState({ isSubscribed: !this.state.isSubscribed })}></input>
          </label><br /><br />
          <label>
            Gender: {this.state.gender}<br />
            <input type='radio' name='Gender' value={'Male'} checked={this.state.gender === 'Male'} onChange={(e) => this.setState({ gender: 'Male' })}></input>Male
            <input type='radio' name='Gender' value={'Female'} checked={this.state.gender === 'Female'} onChange={(e) => this.setState({ gender: 'Female' })}></input>Female
            <input type='radio' name='Gender' value={'Other'} checked={this.state.gender === 'Other'} onChange={(e) => this.setState({ gender: 'Other' })}></input>Other
          </label><br /><br />
          <label>
            Country:
            <select value={this.state.country} onChange={(e) => this.setState({ country: e.target.value })}>
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="Russia">Russia</option>
              <option value="Canada">Canada</option>
              <option value="Norvey">Norvey</option>
            </select>
          </label><br /><br />
          <button>Submit</button>

        </form>
      </div>
    )
  }
}

export default FormAdvance
