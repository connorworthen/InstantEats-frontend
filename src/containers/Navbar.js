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

    return (
      <div>
        <header className="nav-bar">
          <ul className="nav-bar-items">
            <li>
              
                <div className="nav-logo">
                  <Link to="/"><h1 className="logo"><i class="fas fa-utensils"></i>  Instant Eats</h1></Link>
                </div>
              
            </li>
            { ! props.userReducer.loggedIn ? 
            <li>
              <nav class="greeting-links">
                <span className="form-button-signin" variant="primary" onClick={handleLoginShow}>Sign In</span>
                <button className="form-button-signup" variant="primary" onClick={handleSignupShow}>Sign Up</button>

              <Modal show={showSignup} onHide={handleSignupClose}>
                <Modal.Header closeButton>
                    <h1 className="header-type">Sign Up</h1>
                </Modal.Header>
                <Modal.Body>
                  <h6 className="header-link">Already have an account?  <Link to="/login" className="color-link">Sign In</Link></h6><br></br>
                  <AuthLogin />
                </Modal.Body>
                <Modal.Body><UserSignup /></Modal.Body>
              </Modal>

              <Modal show={showLogin} onHide={handleLoginClose}>
                <Modal.Header closeButton>
                  <h1 className="header-type">Login Form</h1>
                </Modal.Header>
                <Modal.Body>
                  <h6 className="header-link">New to Instant Eats?  <Link to="/signup" className="color-link">Create Account</Link></h6><br></br>
                  <AuthLogin />
                </Modal.Body>
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

