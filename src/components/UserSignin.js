import React, {useState} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions/userActions'
import {Form} from 'react-bootstrap'

const UserSignin = (props) => {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit= (e) => {
    props.loginUser(email, password)
    e.preventDefault()
  }

  return (
    <Form onSubmit={e => { handleSubmit(e) }}>

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

      <div className="center">
        <button className="signup-button" variant="primary" type="submit">
          Login
        </button>
      </div>

    </Form>

    )
}

export default connect(null, {loginUser})(UserSignin)