import React from 'react'
import {Link} from 'react-router-dom'
import '../restaurants.css'

const Restaurants = (props) => {

  return (
    <section className="products">
    <div className="header">
      <h1>Restaurants Near You</h1>
    </div>
    <div className="products-center">
      {props.restaurants.map(restaurant =>
      <article class="product">
          <div class="img-container">
            <img
              src='../test1.webp'
              alt="product"
              class="product-img"
            />
            </div>
            <Link to={`/restaurants/${restaurant.id}`}>Details</Link>
            <h3>{restaurant.name}</h3>
      </article>)}
    </div>
  </section>
  )
}

export default Restaurants

{/* <div className="container">
      <h3 className="center">Restaurants Near You</h3>
      <div className="box">
        {props.restaurants.map(restaurant =>
          <div className="card" key={restaurant.id}>
            <div className="card-image">
              <img src={restaurant.img} alt="img here"/>
              <span className="card-title">{restaurant.name}</span>
              <Link to={`/restaurants/${restaurant.id}`}>Details</Link>
          </div>

          <div className="card-content">
            <p>{restaurant.category}</p>
            <p><b>{restaurant.eta}</b></p>
          </div>
        </div>)}
      </div>
    </div>  */}