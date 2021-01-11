import React from 'react';
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom'
import {fetchUsers} from '../actions/userActions'
import Users from '../components/Users'
// import User from '../components/User'
import UserLogin from '../components/UserLogin'
import UserInput from '../components/UserInput'

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    return (
      <div>
        <Link to="/users/new">Signup</Link>
        <Route path='/users/new' component={UserInput} />
        <Link to="/sessions/new">Login</Link>
        <Route exact path='/sessions/new' component={UserLogin} />
        {/* <Route path='/users/:id' render={(routerProps) => <User {...routerProps} users={this.props.users} /> }/> */}
        <Route exact path='/users' render={(routerProps) => <Users {...routerProps} users={this.props.users} /> }/>
      </div>
    )
  }
}
const mapToStateProps = state => {
  return {
    users: state.users
  }
}
export default connect(mapToStateProps, {fetchUsers})(UsersContainer)