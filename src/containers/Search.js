import React from 'react'
import {fetchRestaurants} from '../actions/restaurantAction'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux';
import '../index.css'

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
    this.setState({
      address: ''
    })
    this.props.history.push('/restaurants')
  }

  render() {
      return (
      <div>
        <div className="home-page">
        <header className="cover">
          <div className="cover-wrapper">
            <div className="cover-content">
              <h3 className="search-title">Every Restaurant at your fingertips</h3>
            </div>
            <form className="search-form-container" _lpchecked="1">
              <div className="search-field">
                <div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-1" aria-expanded="false" className="react-autosuggest__container">
                <input
                autocomplete="off" 
                aria-autocomplete="list" 
                aria-controls="react-autowhatever-1" 
                className="search-input" 
                type="text" 
                placeholder="Address"
                name="address" 
                value={this.state.address} 
                onChange={this.handleChange}
                />
                </div>
              </div>
              <div>
                <input type="submit" className="search-submit-button" placeholder="Find Local Restaurants" onClick={this.handleClick} />
              </div>
            </form>
            </div>
        </header>
      </div>
  </div>
    )
  }
}

export default withRouter(connect(null, {fetchRestaurants})(Search))