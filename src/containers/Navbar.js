import React, { useState } from 'react'
import {connect} from 'react-redux';
import {logUserOut} from '../actions/userActions'
import {Link} from 'react-router-dom'
// import {GoogleLogout} from 'react-google-login';
import { Dropdown, Button, Modal } from 'react-bootstrap'
import '../nav.css'
import '../signedin_nav.css'

const Navbar = (props) => {

  // const handleLogout = () => {
  //   this.props.logUserOut(this.state)
  // }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                <Link to="/signup" className="form-button-signup nav-button">Sign up</Link>
                <Button className="form-button-signin nav-button" variant="primary" onClick={handleShow}>
                  
              </Button>

              <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
              </nav>

            </li>
              :
                  <Dropdown>          
                    <Dropdown.Toggle variant="danger" size="sm" id="dropdown-basic">
                      <i className="far fa-user-circle" aria-hidden="true"></i>
                      Hi, {props.userReducer.user.profileObj}
                    </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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

