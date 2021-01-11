import React from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions/userActions'

class UserLogin extends React.Component {
  
  state = {
    email: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.loginUser(this.state)
    this.setState({
      email: '',
      password: '' 
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

          <input type="submit" placeholder="Login"/>
        </form>
      </div>
    )
  }
}

export default connect(null, {loginUser})(UserLogin)