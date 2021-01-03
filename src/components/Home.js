import React, { Component } from 'react';
import Signup from './registrations/Signup';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <Signup />
      </div>
    );
  }
}