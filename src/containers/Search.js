import React from 'react'
import {fetchRestaurants} from '../actions/restaurantAction'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux';

class Search extends React.Component {

  state = {
    address: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = (event) => {
    event.preventDefault()
    this.props.fetchRestaurants(this.state)
    this.props.history.push('/restaurants')
  }

  render() {
    return (
      <div>
        <h3>Enter Delivery Address</h3>
        <form>
          <input
            type="text" 
            placeholder="Address"
            name="address" 
            value={this.state.address} 
            onChange={this.handleChange} 
          />

          <input type="submit" placeholder="Find Local Restaurants" onClick={this.handleClick}/>
        
        </form>
      </div>
    )
  }
}

export default withRouter(connect(null, {fetchRestaurants})(Search))