import React, { Component } from 'react';

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      address: '',
      phone_number: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit(e) {
    e.preventDefault()
    const {first_name, last_name, email, password, address, phone_number} = this.state
    let user = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      address: address,
      phone_number: phone_number
    }
    return fetch('http://localhost:3001/api/v1/users', {
      method: "POST",
      body: user
    })
    .then(response => {

        this.props.handleLogin(response.data)
        this.redirect()
    })
  };

  redirect = () => {
    this.props.history.push('/')
  }

render() {
  return (
      <div>
        <h1>Sign Up</h1>
      <form onSubmit={this.handleSubmit}>
          <input
            placeholder="first_name"
            type="text"
            name="first_name"
            value={this.state.first_name}
            onChange={this.handleChange}
            required
          />
          <input
            placeholder="last_name"
            type="text"
            name="last_name"
            value={this.state.last_name}
            onChange={this.handleChange}
            required
          />
          <input 
            placeholder="email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <input
            placeholder="address"
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleChange} 
            required
          />
          <input 
            placeholder="phone_number"
            type="phone_number"
            name="phone_number"
            value={this.state.phone_number}
            onChange={this.handleChange}
            required
          />


          <button placeholder="submit" type="submit">
            Sign Up
          </button>

        </form>  
      </div>
    );
  }
}
export default Signup;