import React from 'react'
import {Link} from 'react-router-dom'

const Restaurants = (props) => {

  return (
    <div className="container">
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
    </div>
  )
}

export default Restaurants
