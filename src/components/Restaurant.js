import React from 'react'
// import {Redirect} from 'react-router-dom'

const Restaurant = (props) => {

  let restaurant = props.restaurants[props.match.params.id - 1]

  return (
    <div>
      <li>
        {restaurant ? restaurant.name : null } - {restaurant ? restaurant.distance : null }
      </li>
    </div>
  )
}

export default Restaurant