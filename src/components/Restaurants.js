import React from 'react'
import {Link} from 'react-router-dom'

const Restaurants = (props) => {

  return (
    <div> 
      {props.restaurants.map(restaurant =>
        <li key={restaurant.id}>
          <Link to={`/restaurants/${restaurant.id}`}>
            {restaurant.name}
          </Link>
        </li>)}
    </div>
  )
}

export default Restaurants