import React, { Component } from 'react';
import {connect} from 'react-redux'
import {createUser} from '../fetchRequests/fetchUser'

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      address: '',
      phone_number: '',
      signupErrors: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createUser(this.state)
    this.setState({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      address: '',
      phone_number: ''
    })
  }

render() {
  return (
      <div>
        <h1>Sign Up</h1>
      <form onSubmit={this.handleSubmit}>
          <input
            type="first_name"
            name="first_name"
            placeholder="First Name"
            value={this.state.first_name}
            onChange={this.handleChange}
            required
          />
          <input
            type="last_name"
            name="last_name"
            placeholder="Last Name"
            value={this.state.last_name}
            onChange={this.handleChange}
            required
          />
          <input 
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <input
            type="address"
            name="address"
            placeholder="Address"
            value={this.state.address}
            onChange={this.handleChange} 
            required
          />
          <input
            type="phone_number"
            name="phone_number"
            placeholder="Phone Number"
            value={this.state.phone_number}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Create Account</button>

        </form>  
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: (userInfo) => dispatch(createUser(userInfo))
  }
}

export default connect(null, mapDispatchToProps)(Signup)