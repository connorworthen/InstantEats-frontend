import React from 'react'
// import {connect} from 'react-redux';
// import {logUserOut} from '../actions/userActions'
// import {Link} from 'react-router-dom'
import '../index.css'

function Nav() {
  return (
    <Navbar>
      hello
    </Navbar>
  )
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> {props.children}</ul>
    </nav>
  )
}


export default Nav

