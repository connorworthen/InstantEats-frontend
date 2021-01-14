import React from 'react'
import {fetchRestaurants} from '../actions/restaurantAction'
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

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.fetchRestaurants(this.state)
    this.setState({
      address: '' 
    })
    console.log("fetch restaurants")
    // this.props.history.push('/restaurants')
  }

  render() {
    return (
      <div>
        <h3>Enter Delivery Address</h3>
        <form onClick={this.handleSubmit} >
          <input
            type="text" 
            placeholder="Address"
            name="address" value={this.state.address} 
            onChange={this.handleChange} 
          />

          <input type="submit" placeholder="Find Local Restaurants" />
        
        </form>
      </div>
    )
  }
}

export default connect(null, {fetchRestaurants})(Search)