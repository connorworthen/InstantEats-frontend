import React from 'react'
import {Route, Link} from 'react-router-dom'
import Restaurant from './Restaurant'

const Restaurants = (props) => {
  console.log(props)
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