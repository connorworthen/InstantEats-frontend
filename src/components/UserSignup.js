import React, {useState} from 'react';
import {connect} from 'react-redux';
import {signupUser} from '../actions/userActions'
import {Form, Button} from 'react-bootstrap'
import '../nav.css'

const UserSignup = (props) => {
  
  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone_number, setPhone_number] = useState("")

  const handleSubmit= (e) => {
    props.signupUser(first, last, email, password, phone_number)
    e.preventDefault()
  }

  return (
    <Form onSubmit={e => { handleSubmit(e) }}>

      <Form.Group controlId="formBasicFirst">
        <Form.Label><b>First Name:</b></Form.Label>
        <Form.Control 
          type="text" 
          name="first" 
          value={first} 
          onChange={e => setFirst(e.target.value)}  
        />
      </Form.Group>

      <Form.Group controlId="formBasicLast">
        <Form.Label><b>Last Name:</b></Form.Label>
        <Form.Control 
          type="text"
          name="last" 
          value={last} 
          onChange={e => setLast(e.target.value)}  
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label><b>Email Address:</b></Form.Label>
        <Form.Control 
          type="email" 
          name="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)}  
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label><b>Password:</b></Form.Label>
        <Form.Control 
          type="password" 
          name="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)}  
        />
      </Form.Group>

      <Form.Group controlId="formBasicPhoneNumber">
        <Form.Label><b>Phone Number:</b></Form.Label>
        <Form.Control 
          type="text"
          name="phone_number" 
          value={phone_number} 
          onChange={e => setPhone_number(e.target.value)}  
        />
      </Form.Group>
      
      <div className="center">
        <button className="signup-button" variant="primary" type="submit">
          Login
        </button>
      </div>

    </Form>

    )
}

export default connect(null, {signupUser})(UserSignup)


