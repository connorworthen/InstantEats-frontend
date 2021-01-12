import React from 'react'
// import { Link } from 'react-router-dom'

const Restaurant = (props) => {

  // console.log(props)
  // let restaurant = props.restaurant[props.match.params.id - 1]
  // console.log(restaurant)
  
  return (
    <div>
      <li>
        {/* {restaurant ? restaurant.name : null } - {restaurant ? restaurant.distance : null } */}
        {props.restaurant.name} + {props.restaurant.distance}
      </li>
    </div>
  )
}

export default Restaurant