import React from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions/userActions'
import {Form, Button} from 'react-bootstrap'

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
    this.props.history.push('/')
  }

  render() {
    return (
        <Form onSubmit={this.handleSubmit}>
          <h1>Login Form</h1><br></br>
  <Form.Group controlId="formBasicEmail">
    <Form.Label><b>Email Address:</b></Form.Label>
    <Form.Control type="email" 
            placeholder="Email*" 
            name="email" 
            value={this.state.email} 
            onChange={this.handleChange}  />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label><b>Password:</b></Form.Label>
    <Form.Control type="password" 
            placeholder="Password*" 
            name="password" 
            value={this.state.password} 
            onChange={this.handleChange}  />
  </Form.Group>
  <Form.Text className="text-muted">
      Note: We'll never share your data with anyone else.
    </Form.Text>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>
    )
  }
}

export default connect(null, {loginUser})(UserLogin)

