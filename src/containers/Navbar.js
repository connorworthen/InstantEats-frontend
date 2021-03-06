import React, { useState } from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {logUserOut} from '../actions/userActions'
import {Dropdown, Modal} from 'react-bootstrap'
import UserSignin from '../components/UserSignin'
import UserSignup from '../components/UserSignup'
import AuthLogin from '../components/AuthLogin'
import Search from './Search'
import '../navbar.css'

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
        <div className="hero">
          <div className="header">

              <Link to="/">
                <h1 className="nav-logo">
                  <i class="fas fa-utensils"></i>  Instant Eats
                </h1>
              </Link>

            { ! props.userReducer.loggedIn ? 
              <div>
                <nav>
                  <span className="form-button-signin" variant="primary" onClick={handleLoginShow}>Sign In</span>
                  <span className="form-button-signup" variant="primary" onClick={handleSignupShow}>Sign Up</span>
                </nav>

                <Modal show={showSignup} onHide={handleSignupClose}>
                  <Modal.Header closeButton>
                    <h1 className="header-type">Sign Up</h1>
                  </Modal.Header>

                  <Modal.Body>
                    <h6 className="header-link">Already have an account?  <Link to="/login" className="color-link">Sign In</Link></h6><br></br>
                    <AuthLogin />
                  </Modal.Body>

                  <Modal.Body>
                    <UserSignup />
                  </Modal.Body>
                </Modal>

                <Modal show={showLogin} onHide={handleLoginClose}>
                  <Modal.Header closeButton>
                    <h1 className="header-type">Login Form</h1>
                  </Modal.Header>
                  
                  <Modal.Body>
                    <h6 className="header-link">New to Instant Eats?  <Link to="/signup" className="color-link">Create Account</Link></h6><br></br>
                    <AuthLogin />
                  </Modal.Body>

                  <Modal.Body>
                    <UserSignin />
                  </Modal.Body>
                </Modal>               
              </div>
              :            
              <Dropdown>
                <Dropdown.Toggle size="sm" variant="info" id="dropdown-custom-2" >
                  <i className="far fa-user-circle" aria-hidden="true"></i>
                  {/* Hi, {props.userReducer.user.user.email} */}
                  Hi, {props.userReducer.user.profileObj}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>                    
                </Dropdown.Menu>
              </Dropdown>
            }             
          </div>
        <Search />
      </div> 
    )
  }

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer
  }
}

export default connect(mapStateToProps, {logUserOut})(Navbar)

