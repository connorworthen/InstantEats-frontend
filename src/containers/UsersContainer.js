import React from 'react';
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchUsers} from '../actions/fetchUsers'
import Users from '../components/Users'
import UserInput from '../components/UserInput'

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    return (
      <div>
        <Route exact path='/users/new' component={UserInput} />
        <Route exact path='/users' render={() => <Users users={this.props.users} /> }/>
        Home Page
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