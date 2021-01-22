import React from 'react'
import {connect} from 'react-redux';
import {logUserOut} from '../actions/userActions'
// import * as ReactBootStrap from 'react-bootstrap'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'

class Navbar extends React.Component {

  handleLogout = () => {
    this.props.logUserOut(this.state)
  }

  render() {
    return (
      <Nav>
        <NavLink to='/' activeStyle>
          <h1>Instant Eats</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/' activeStyle>
            About
          </NavLink>
          <NavLink to='/' activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
          {
            !this.props.userReducer.loggedIn ? 
            <NavBtn>
              <NavBtnLink to='/signup'>
                Signup
              </NavBtnLink>
              <NavBtnLink to='/login'>
                Login
              </NavBtnLink>
            </NavBtn> 
            :
            <NavBtn> 
                <NavBtnLink to='/' onClick={this.handleLogout}>
                  Welcome {this.props.userReducer.user.user.first}
                  Logout
                </NavBtnLink>
            </NavBtn> 
          }      
      </Nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer
  }
}

export default connect(mapStateToProps, {logUserOut})(Navbar)

// <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//         <ReactBootStrap.Navbar.Brand href="/">Instant Eats</ReactBootStrap.Navbar.Brand>
//         {
//           !this.props.userReducer.loggedIn ? 
//         <div><ReactBootStrap.Nav.Link href="/signup">Sign up</ReactBootStrap.Nav.Link>
//         <ReactBootStrap.Nav.Link href="/login">Login</ReactBootStrap.Nav.Link></div> : 
//         <div><h1>Welcome {this.props.userReducer.user.user.first}</h1> <ReactBootStrap.Nav.Link onClick={this.handleLogout}>Logout</ReactBootStrap.Nav.Link></div>
//         }
//       </ReactBootStrap.Navbar> 