import React, { useState } from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {logUserOut} from '../actions/userActions'
// import {Link} from 'react-router-dom'
import UserSignin from '../components/UserSignin'
import { Dropdown, Button, Modal } from 'react-bootstrap'
import '../nav.css'
import '../signedin_nav.css'
import UserSignup from '../components/UserSignup'
import AuthLogin from '../components/AuthLogin'

const Navbar = (props) => {

  const handleLogout = () => {
    props.logUserOut()
    handleLoginClose()
    handleSignupClose()
  }
  
  const [showSignup, setShowSignup] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);
  const handleSignupClose = () => setShowSignup(false);
  const handleSignupShow = () => setShowSignup(true);

  // const [userForm, setUserForm] = useState([]);
  // const addUserForm = (log) => {
  //   let logs = [...userForm, log]
  //   setUserForm(logs)
  // }

    return (
      <div>
        <header className="nav-bar">
          <ul className="nav-bar-items">
            <li>
              
                <div className="nav-logo">
                  {/* <img src="https://seat-check-seeds.s3-us-west-1.amazonaws.com/sleeper-chair.png" /> */}
                  <h1 className="logo">Instant Eats</h1>
                </div>
              
            </li>
            { ! props.userReducer.loggedIn ? 
            <li>
              <nav class="greeting-links">
                <Button className="form-button-signup nav-button" variant="primary" onClick={handleSignupShow}>Signup</Button>
                <Button className="form-button-signin nav-button" variant="primary" onClick={handleLoginShow}>Login</Button>

              <Modal show={showSignup} onHide={handleSignupClose}>
                <Modal.Header closeButton>
                  <h1>Sign Up</h1>
                  <h6>Already have an account?<Link to="/login">Sign In</Link></h6>
                  <AuthLogin />
                  --------------- or continue with email ---------------
                </Modal.Header>
                <Modal.Body><UserSignup /></Modal.Body>
              </Modal>

              <Modal show={showLogin} onHide={handleLoginClose}>
                <Modal.Header closeButton>
                  <h1>Login Form</h1>
                </Modal.Header>
                <Modal.Body><UserSignin /></Modal.Body>
              </Modal>
              </nav>

            </li>
              :
                  <Dropdown>          
                    <Dropdown.Toggle variant="danger" size="sm" id="dropdown-basic">
                      <i className="far fa-user-circle" aria-hidden="true"></i>
                      {/* Hi, {props.userReducer.user.user.email} */}
                      Hi, {props.userReducer.user.profileObj}
                    </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>                    
                    </Dropdown.Menu>
                </Dropdown>
              }
          </ul>
        </header>
      </div>
    )
  }

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer
  }
}

export default connect(mapStateToProps, {logUserOut})(Navbar)

