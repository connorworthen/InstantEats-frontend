import React from 'react';
import {connect} from 'react-redux';
import {signupUser} from '../actions/userActions'
import {Form, Button} from 'react-bootstrap'

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
      <Form onSubmit={this.handleSubmit}>
  <Form.Group controlId="formBasicFirst">
    <Form.Label><b>First Name:</b></Form.Label>
    <Form.Control type="text" 
            placeholder="First Name*" 
            name="first" 
            value={this.state.first} 
            onChange={this.handleChange} />
  </Form.Group>

  <Form.Group controlId="formBasicLast">
    <Form.Label><b>Last Name:</b></Form.Label>
    <Form.Control type="text" 
            placeholder="Last Name*" 
            name="last" 
            value={this.state.last} 
            onChange={this.handleChange}   />
  </Form.Group>

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

  <Form.Group controlId="formBasicPhoneNumber">
    <Form.Label><b>Phone Number:</b></Form.Label>
    <Form.Control type="text" 
            placeholder="Phone Number*" 
            name="phone_number" 
            value={this.state.phone_number} 
            onChange={this.handleChange}   />
  </Form.Group>

  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="I agree to Terms of Use & Privacy Statement*" />
  </Form.Group>
  <Form.Text className="text-muted">
      Note: We'll never share your data with anyone else.
    </Form.Text>
  <Button variant="primary" type="submit">
    Signup
  </Button>
</Form>
    )
  }
}

export default connect(null, {signupUser})(UserInput)


