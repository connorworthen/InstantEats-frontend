import React, {useState} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions/userActions'
// import { refreshTokenSetup } from '../utils/refreshToken'
// import FacebookLogin from 'react-facebook-login';
// import GoogleLogin from 'react-google-login';
// import {googleAuth} from '../actions/oauthActions'
// import {facebookAuth} from '../actions/oauthActions'
import {Form, Button} from 'react-bootstrap'

const UserSignin = ({addUserForm}) => {
  
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit= (e) => {
      addUserForm([email, password])
      e.preventDefault()
    }

  return (
    <Form onSubmit={e => { handleSubmit(e) }}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label><b>Email Address:</b></Form.Label>
        <Form.Control type="email" 
          placeholder="Email*" 
          name="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)}  
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label><b>Password:</b></Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Password*" 
          name="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)}  
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>

    )
}

export default connect(null, {loginUser})(UserSignin)