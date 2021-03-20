import React from 'react'
import {connect} from 'react-redux';
import {logUserOut} from '../actions/userActions'
import {Link} from 'react-router-dom'
// import {GoogleLogout} from 'react-google-login';
// import * as ReactBootStrap from 'react-bootstrap'
import '../nav.css'
import '../signedin_nav.css'

class Navbar extends React.Component {

  handleLogout = () => {
    this.props.logUserOut(this.state)
  }

  test = () => {
    console.log('test')
  }


  render() {
    return (
      <div>
        <header className="nav-bar">
          <ul className="nav-bar-items">
            <li>
              <a href="/">
                <div className="nav-logo">
                  <img src="https://seat-check-seeds.s3-us-west-1.amazonaws.com/sleeper-chair.png" />
                  <h1 className="logo">Instant Eats</h1>
                </div>
              </a>
            </li>
            { !this.props.userReducer.loggedIn ? 
            <li>
              <nav class="greeting-links">
                <Link to="/signup" className="form-button-signup nav-button">Sign up</Link>
                <Link to="login" className="form-button-signin nav-button">Sign in</Link>
              </nav>
            </li>
              :
              <div className="userProfileDrop">
                <h3 className="user-header">
                  <i className="far fa-user-circle" aria-hidden="true"></i>
                    Hi, {this.props.userReducer.user.profileObj}             
                    <span onClick={this.test}><i className="fas fa-chevron-down" aria-hidden="true"></i></span>
                </h3>             
                <ul className="header-dropdown-menu">
                  <div className="dropdown-item">
                    <a className="profile-link">
                      <li>Profile</li>
                    </a>
                  </div>
                  <div className="dropdown-item">
                    <li>Sign Out</li>
                  </div>
                </ul>
              </div>
              }
          </ul>
        </header>
      </div>
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

{/* <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactBootStrap.Navbar.Brand href="/">Instant Eats</ReactBootStrap.Navbar.Brand>
        {
          !this.props.userReducer.loggedIn ? 
        <div><ReactBootStrap.Nav.Link href="/signup">Sign up</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="/login">Login</ReactBootStrap.Nav.Link>
        </div>
        : 
        <div><h1>Welcome, {this.props.userReducer.user.profileObj} </h1><ReactBootStrap.Nav.Link onClick={this.handleLogout}>Logout</ReactBootStrap.Nav.Link></div>
        }
      </ReactBootStrap.Navbar>  */}

