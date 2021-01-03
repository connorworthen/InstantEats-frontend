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
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (e) => {
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
    fetch('http://localhost:3001/api/v1/users', {user})
    .then(response => { 
        this.props.handleLogin(response.data)
        this.redirect()
    })
    // .catch(error => console.log('api errors:', error))
  };

  redirect = () => {
    this.props.history.push('/')
  }

render() {
    const {first_name, last_name, email, password, address, phone_number} = this.state
return (
      <div>
        <h1>Sign Up</h1>
      <form onSubmit={this.handleSubmit}>
          <input
            placeholder="first_name"
            type="text"
            name="first_name"
            value={first_name}
            onChange={this.handleChange}
          />
          <input
            placeholder="last_name"
            type="text"
            name="last_name"
            value={last_name}
            onChange={this.handleChange}
          />
          <input 
            placeholder="email"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <input
            placeholder="address"
            type="text"
            name="address"
            value={address}
            onChange={this.handleChange} 
          />
          <input 
            placeholder="phone_number"
            type="phone_number"
            name="phone_number"
            value={phone_number}
            onChange={this.handleChange}
          />


          <button placeholder="submit" type="submit">
            Sign Up
          </button>

        </form>
        <div>
          {
            this.state.errors ? this.handleErrors() : null
          }
        </div>
      </div>
    );
  }
}
export default Signup;