import React from 'react';
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchRestaurants} from '../actions/restaurantAction'
import Restaurants from '../components/Restaurants'
import Restaurant from '../components/Restaurant'

class RestaurantsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchRestaurants()
  }

  render() {
    return (
      <div>
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

export default connect(mapToStateProps, {fetchRestaurants})(RestaurantsContainer)