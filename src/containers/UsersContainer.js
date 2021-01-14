import React from 'react';
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchRestaurants} from '../actions/restaurantAction'
import UserLogin from '../components/UserLogin'
import UserSignup from '../components/UserSignup'
// import Search from '../components/Search'
import Restaurants from '../components/Restaurants'
import Restaurant from '../components/Restaurant'

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.fetchRestaurants()
    // debugger
    // props coming back undefined 
  }

  render() {
    return (
      <div>
        <Route path='/signup' component={UserSignup} />
        <Route exact path='/login' component={UserLogin} />
        <Route path='/restaurants/:id' render={(routerProps) => <Restaurant {...routerProps} restaurants={this.props.restaurants} /> }/>
        <Route exact path='/restaurants' render={(routerProps) => <Restaurants {...routerProps} restaurants={this.props.restaurants} /> }/>
      </div>
    )
  }
}
const mapToStateProps = state => {
  return {
    restaurants: state.restaurants
  }
}

export default connect(mapToStateProps, {fetchRestaurants})(UsersContainer)