import React from 'react'
import {connect} from 'react-redux';
import {logUserOut} from '../actions/userActions'
import * as ReactBootStrap from 'react-bootstrap'

class Navbar extends React.Component {

  handleChange = () => {
    this.props.logUserOut(this.state)
  }

  render() {
    return (
    <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactBootStrap.Navbar.Brand href="/">Instant Eats</ReactBootStrap.Navbar.Brand>
        {
        !this.props.userReducer.loggedIn ? <div><ReactBootStrap.Nav.Link href="/signup">Sign up</ReactBootStrap.Nav.Link> 
          <ReactBootStrap.Nav.Link eventKey={2} href="/login">Login</ReactBootStrap.Nav.Link></div> : <h1>Welcome {this.props.userReducer.user.user.email} <ReactBootStrap.Nav.Link onClick={this.handleChange}>Logout</ReactBootStrap.Nav.Link></h1>
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