import React from 'react';
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
// import {fetchRestaurants} from '../actions/restaurantAction'
import UserLogin from '../components/UserLogin'
import UserSignup from '../components/UserSignup'
// import Restaurants from '../components/Restaurants'
// import Restaurant from '../components/Restaurant'

class UsersContainer extends React.Component {

  // componentDidMount() {
  //   this.props.fetchUsers()
  // }

  render() {
    return (
      <div>
        <Route path='/users/new' component={UserSignup} />
        <Route exact path='/sessions/new' component={UserLogin} />
        {/* <Route path='/restaurants' render={(routerProps) => <Restaurants {...routerProps} restaurants={this.props.restaurants} /> }/> */}
      </div>
    )
  }
}
// const mapToStateProps = state => {
//   return {
//     users: state.users
//   }
// }
export default connect()(UsersContainer)