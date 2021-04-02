import React, {useState} from 'react'
import {fetchRestaurants} from '../actions/restaurantAction'
import {connect} from 'react-redux';
import '../search.css'

const Search = (props) => {

  const [address, setAddress] = useState("")


  const handleSubmit = (e) => {
    props.fetchRestaurants(address)
    e.preventDefault()
  }

  return (
      <div className="home-page">
        <header className="cover">
          <div className="cover-wrapper">
            <div className="cover-content">
              <h3 className="search-title">Every Restaurant at your fingertips</h3>
            </div>

            <form className="search-form-container" onSubmit={e => { handleSubmit(e) }}> 
              <div className="search-field">
                  <input
                  autocomplete="off"
                  className="search-input" 
                  type="text" 
                  placeholder="Enter Address Here"
                  name="address" 
                  value={address} 
                  onChange={e => setAddress(e.target.value)} 
                />

                <button type="submit" className="search-submit-button">
                  <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </form>
          </div>
        </header>
      </div>
    )
}

export default connect(null, {fetchRestaurants})(Search)