import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import '../restaurants.css'

const Restaurants = (props) => {

  return (
    <section className="products">
    <div className="header">
      <h1>Restaurants Near You</h1>
    </div>
    <div className="select">
      <select>
        <option value="" disabled selected>Sort by</option>
          <option>Alphabet - A-Z</option>
          <option>Alphabet - Z-A</option>
      </select>
    </div>
    <div className="products-center">
      {props.restaurants.map(restaurant =>
      <article class="product">
          <div class="img-container">
            <img src={restaurant.image.url} alt="restaurant image" class="product-img" />
            </div>
            <Link to={`/restaurants/${restaurant.id}`}>Details</Link>
            <h3>{restaurant.name}</h3>
      </article>)}
    </div>
  </section>
  )
}

export default Restaurants