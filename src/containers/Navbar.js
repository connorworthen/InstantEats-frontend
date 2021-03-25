import React from 'react'
import {connect} from 'react-redux';
import {logUserOut} from '../actions/userActions'
import {Link} from 'react-router-dom'
// import {GoogleLogout} from 'react-google-login';
// import * as ReactBootStrap from 'react-bootstrap'
import '../nav.css'
import '../signedin_nav.css'

class Navbar extends React.Component {

  constructor() {
    super()

    this.state = {
      openDrop: false,
    }

    this.openDrop = this.openDrop.bind(this)
    this.closeDrop = this.closeDrop.bind(this)
  }

  openDrop(e) {
    e.preventDefault()
    // debugger
    this.setState({ openDrop: true }, () => {
      document.addEventListener('click', this.closeDrop)
      // debugger
    })
  }

  closeDrop(e) {
    if (!this.dropdownMenu.contains(e.target)) {
      
    this.setState({ openDrop: false }, () => {
      document.removeEventListener('click', this.closeDrop)
      // debugger
      })
    }
  }

  handleLogout = () => {
    this.props.logUserOut(this.state)
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
                    <button onClick={this.openDrop}><i className="fas fa-chevron-down" aria-hidden="true"></i></button>
                </h3> 
                  {
                    this.state.openDrop
                      ? (
                        <div className="menu" 
                          ref={(element) => {
                            this.dropdownMenu = element
                          }}
                        >
                          <button> item 1 </button>
                          <button> item 2 </button>
                          <button> item 3 </button>
                        </div>
                      ) : (
                        null
                      )
                  }
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

