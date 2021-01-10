import React from 'react';
import {connect} from 'react-redux';
import {signupUser} from '../actions/signupUser'

class UserInput extends React.Component {
  
  state = {
    email: '',
    password: '',
    address: '',
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
      email: '',
      password: '',
      address: '',
      phone_number: '' 
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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

          <label>Address: </label>
          <input 
            type="text" 
            placeholder="Address" 
            name="address" 
            value={this.state.address} 
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