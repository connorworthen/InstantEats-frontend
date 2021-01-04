import React from 'react';
import {connect} from 'react-redux'
import Users from '../components/Users'
import UserInput from '../components/UserInput'

class UsersContainer extends React.Component {

  render() {
    return (
      <div>
        <UserInput/>
        <Users/>
      </div>
    )
  }
}

export default UsersContainer