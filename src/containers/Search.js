import React from 'react'
import {fetchRestaurants} from '../actions/restaurantAction'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux';

class Search extends React.Component {

  state = {
    address: '',
    display: true
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = (event) => {
    event.preventDefault()
    this.props.fetchRestaurants(this.state)
    this.setState({
      address: '',
      display: false
    })
    this.props.history.push('/restaurants')
  }

  render() {
    if (this.state.display) {
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
    } else {
      return (
      <div></div>
      )   
    }
    
  }
}

export default withRouter(connect(null, {fetchRestaurants})(Search))