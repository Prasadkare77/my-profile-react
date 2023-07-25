import React, { Component } from 'react'

export class FormValidation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            isSubscribed:false,
            errors:{
                name:'',
                email:'',
            }
        }
    }

    //handleChange
    handleChange = (e) => {
        const { name, type, value, checked} = e.target;
        const newValue = type === 'checkbox' ? checked:value

        // console.log(name);
        // console.log(type);
        // console.log(value);
        // console.log(e.target);

        this.setState({[name]: newValue},()=>{
            this.validateField(name,newValue)
        })
    }

    //validateFeild
    validateField=(fieldName,value)=>{
        const {errors} = this.state
        switch(fieldName){
            case "name":
                errors.name =value ? '' : 'Name Is Required';
                break;
            case "email":
                errors.email=value ? '':'Email is required'
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.validateForm())
        // console.log(this.state);
        alert(`Name:${this.state.name}, Email: ${this.state.email}`);
    }
    validateForm = () => {
        const {errors,name,email} = this.state

        const nameValid = name.trim() !== ' ';
        const emailValid = email.trim() !== ' ';

        this.setState((prevState)=>({
            errors:{
                ...prevState.errors,
                name:nameValid?'':'Name is required',
                email:emailValid?"":"Email is required"
            }
        }))
        return nameValid && emailValid
    }

    render() {
        const { name, email, isSubscribed, errors } = this.state //state destructuring
        return (
            <div>
                <h2>Form Handling in React</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name: <input type='text' name="name" value={name} onChange={this.handleChange}></input>
                        {errors.name && <span>{errors.name}</span>}
                    </label><br /><br />
                    <label>
                        Email: <input type='email' name='email' value={email} onChange={this.handleChange}></input>
                        {errors.email && <span>{}errors.email</span>}
                    </label><br/><br/>
                    <label>
                        Subscribe to NewsLetter:
                        <input type='checkbox' name='isSubscribed' checked={isSubscribed} onChange={this.handleChange}></input>
                    </label><br/><br/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default FormValidation
