import React from 'react';
import {Route} from 'react-router-dom'
import UserLogin from '../components/UserLogin'
import UserSignup from '../components/UserSignup'

class UsersContainer extends React.Component {

  render() {
    return (
      <div>
        <Route path='/signup' component={UserSignup} />
        <Route exact path='/login' component={UserLogin} />   
      </div>
    )
  }
}

export default UsersContainer