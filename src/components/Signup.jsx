import React, { Component } from 'react'

import './styles/Signup.css'
export default class Signup extends Component {

  state = {
    emailVerified: false,
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    errors: {}
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  verifyEmail = event => {
    event.preventDefault()
    const { email } = this.state
    if(email.includes('.edu')){
      this.setState({ emailVerified: true, errors: {} })
    }
    else {
      const { errors } = this.state
      if(email === '')
        errors['email'] = 'Please enter an email that ends with .edu'
      else
        errors['email'] = 'You must have a valid .edu email to register'
      this.setState({ errors })
    }
  }
  
  render() {
    return (
      <div className='signupContainer'>
        <div className='signupContent'>
          {this.state.emailVerified &&
            <form className='signupInfo' onSubmit={this.onCompleteSignup}>
              <span className='signupNameFields'>
                <span className='firstName'>
                  <label>First Name</label>
                  <input
                    type='text'
                    name='firstName'
                    onChange={this.onChange}
                    value={this.state.firstName}/>
                </span>
                <span className='lastName'>
                  <label>Last Name</label>
                  <input
                    type='text'
                    name='lastName'
                    onChange={this.onChange}
                    value={this.state.lastName}/>
                </span>
              </span>
              <br/><br/>
              <span className='passwordFields'>
                <span>
                  <label>Password</label>
                  <input
                    type='password'
                    name='password'
                    onChange={this.onChange}
                    value={this.state.password}/>
                </span>
                <span>
                  <label>Confirm Password</label>
                  <input
                    type='password'
                    name='confirmPassword'
                    onChange={this.onChange}
                    value={this.state.confirmPassword}/>
                </span>
              </span>
            </form>
          }
          {!this.state.emailVerified &&
            <form className='signupEmail' onSubmit={this.verifyEmail}>
              <h3>Enter your .edu email so we can verify your status.</h3>
              {this.state.errors.email && <p style={{color: 'red'}}>{this.state.errors.email}</p>}
              <input
                type='email'
                name='email'
                onChange={this.onChange}
                value={this.state.email}/>
            </form>
          }
        </div>
      </div>
    )
  }
}
