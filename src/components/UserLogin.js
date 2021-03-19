import React from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions/userActions'
import { refreshTokenSetup } from '../utils/refreshToken'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {googleAuth} from '../actions/oauthActions'
import {facebookAuth} from '../actions/oauthActions'
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

  responseGoogle = (res) => {
    const profileObj = res.profileObj.email
    this.props.refreshTokenSetup(res)
    this.props.googleAuth(profileObj)
    this.props.history.push('/')
  }
  
  responseFacebook = (fields) => {
    console.log('test', fields)
    const profileObj = fields.name
    this.props.facebookAuth(profileObj)
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
      <GoogleLogin
      clientId="52473665366-id5h9o0on0jp6mrlm6otc9tr47j0f9bl.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={this.responseGoogle}
      onFailure={this.responseGoogle}
      cookiePolicy={'single_host_origin'}
      // isSignedIn={true}
    />

    <FacebookLogin
    appId="1530624210459288"
    // autoLoad={true}
    fields="name,email,picture"
    onClick={this.componentClicked}
    callback={this.responseFacebook} />
    </Form.Text>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>

    )
  }
}

export default connect(null, {loginUser, googleAuth, refreshTokenSetup, facebookAuth})(UserLogin)

