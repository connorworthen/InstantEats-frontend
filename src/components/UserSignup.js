import React from 'react';
import {connect} from 'react-redux';
import {signupUser} from '../actions/userActions'

class UserInput extends React.Component {
  
  state = {
    first: '',
    last: '',
    email: '',
    password: '',
    phone_number: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.signupUser(this.state)
    this.setState({
      first: '',
      last: '',
      email: '',
      password: '',
      phone_number: ''
    })
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>First Name: </label>
          <input
            type="text" 
            placeholder="First Name" 
            name="first" 
            value={this.state.first} 
            onChange={this.handleChange} 
          /><br></br>

          <label>Last Name: </label>
          <input
            type="text" 
            placeholder="Last Name" 
            name="last" 
            value={this.state.last} 
            onChange={this.handleChange} 
          /><br></br>

          <label>Email: </label>
          <input
            type="email" 
            placeholder="Email" 
            name="email" 
            value={this.state.email} 
            onChange={this.handleChange} 
          /><br></br>

          <label>Password: </label>
          <input
            type="password" 
            placeholder="Password" 
            name="password" 
            value={this.state.password} 
            onChange={this.handleChange} 
          /><br></br>

          <label>Phone Number: </label>
          <input 
            type="text" 
            placeholder="Phone Number" 
            name="phone_number" 
            value={this.state.phone_number} 
            onChange={this.handleChange} 
          /><br></br>

          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, {signupUser})(UserInput)