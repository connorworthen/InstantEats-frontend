import React from 'react';
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom'
import {fetchUsers} from '../actions/userActions'
import Users from '../components/Users'
// import User from '../components/User'
import UserLogin from '../components/UserLogin'
import UserInput from '../components/UserSignup'

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    return (
    <nav className="Navbar">
        <h1 className="navbar-logo">Instant Eats<i class="fas fa-utensils"></i></h1>
        <div className="menu-icon">

        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users/new">Signup</Link></li>
          <li><Link to="/sessions/new">Login</Link></li>
          {/* <Route path='/users/:id' render={(routerProps) => <User {...routerProps} users={this.props.users} /> }/> */}
          <Route path='/users/new' component={UserInput} />
          <Route exact path='/users' render={(routerProps) => <Users {...routerProps} users={this.props.users} /> }/>
          <Route exact path='/sessions/new' component={UserLogin} />
        </ul>
    </nav>

    )
  }
}
const mapToStateProps = state => {
  return {
    users: state.users
  }
}
export default connect(mapToStateProps, {fetchUsers})(UsersContainer)