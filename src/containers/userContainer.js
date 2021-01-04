import React from 'react'
import Login from './Login'
import {connect} from 'react-redux'
import Signup from './Signup'



class UserContainer extends React.Component{
    
  render() {
    return (
      <div>
        <Signup />
        <Login />
      </div>
    );
  }
}

const mapStateToProps = state =>{
    return {
        user: state.user.user,
        loggedIn: state.user.login
    }
}


export default connect(mapStateToProps)(UserContainer)