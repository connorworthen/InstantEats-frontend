import React, { Component } from 'react';
import Signup from './registrations/Signup';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard")
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <Signup  handleSignup={this.handleSignup} />
      </div>
    );
  }
}