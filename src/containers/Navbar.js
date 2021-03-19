import React from 'react'
import {connect} from 'react-redux';
import {logUserOut} from '../actions/userActions'
// import {GoogleLogout} from 'react-google-login';
import * as ReactBootStrap from 'react-bootstrap'

class Navbar extends React.Component {

  handleLogout = () => {
    this.props.logUserOut(this.state)
  }

  render() {
    return (
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactBootStrap.Navbar.Brand href="/">Instant Eats</ReactBootStrap.Navbar.Brand>
        {
          !this.props.userReducer.loggedIn ? 
        <div><ReactBootStrap.Nav.Link href="/signup">Sign up</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="/login">Login</ReactBootStrap.Nav.Link>
        </div>
        : 
        <div><h1>Welcome, {this.props.userReducer.user.profileObj} </h1><ReactBootStrap.Nav.Link onClick={this.handleLogout}>Logout</ReactBootStrap.Nav.Link></div>
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

export default connect(mapStateToProps, {logUserOut})(Navbar)

// : {this.props.userReducer.user.user.first}

// if user signed in through google clear google local storage & signout else if user signed in w/o 3rd party clear local storage