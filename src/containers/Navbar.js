import React from 'react'
import {connect} from 'react-redux';
import {logUserOut} from '../actions/userActions'
import * as ReactBootStrap from 'react-bootstrap'

class Navbar extends React.Component {

  handleChange = () => {
    this.props.logUserOut(this.state)
    console.log("logged out")
  }

  render() {
    return (
    <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactBootStrap.Navbar.Brand href="/">Instant Eats</ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
        <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
        <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Divider />
          <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
        </ReactBootStrap.NavDropdown>
      </ReactBootStrap.Nav>
      <ReactBootStrap.Nav>
        {/* <ReactBootStrap.Nav.Link onClick={() => this.openModal()}>Sign in</ReactBootStrap.Nav.Link> */}
          <ReactBootStrap.Nav.Link href="/signup">Sign up</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link eventKey={2} href="/login">Login</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link onClick={this.handleChange}>Logout</ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
    )
  }
}

export default connect(null, {logUserOut})(Navbar)