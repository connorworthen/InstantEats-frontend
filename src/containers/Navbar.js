import React from 'react'
import {connect} from 'react-redux';
import GoogleLogin from 'react-google-login';
import {logUserOut} from '../actions/userActions'
import {googleAuth} from '../actions/oauthActions'
import * as ReactBootStrap from 'react-bootstrap'

class Navbar extends React.Component {

  handleLogout = () => {
    this.props.logUserOut(this.state)
  }

  responseGoogle = (response) => {
      console.log(response)
      console.log(response.profileObj)
      const id_token = response.getAuthResponse().id_token;
      this.props.googleAuth(id_token)
    }

  render() {

    return (
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactBootStrap.Navbar.Brand href="/">Instant Eats</ReactBootStrap.Navbar.Brand>
        {
          !this.props.userReducer.loggedIn ? 
        <div><ReactBootStrap.Nav.Link href="/signup">Sign up</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="/login">Login</ReactBootStrap.Nav.Link>
        <GoogleLogin
          clientId="52473665366-id5h9o0on0jp6mrlm6otc9tr47j0f9bl.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          // isSignedIn={true}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        </div>
        : 
        <div><h1>Welcome  </h1> <ReactBootStrap.Nav.Link onClick={this.handleLogout}>Logout</ReactBootStrap.Nav.Link></div>
        }
      </ReactBootStrap.Navbar> 
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer
  }
}

export default connect(mapStateToProps, {logUserOut, googleAuth})(Navbar)

// {this.props.userReducer.user.user.first}