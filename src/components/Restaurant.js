import React from 'react'

const Restaurant = (props) => {

  // console.log(props)
  let restaurant = props.restaurants[props.match.params.id - 1]
  // console.log(restaurant)
  
  return (
    <div>
      <li>
        {restaurant ? restaurant.name : null } - {restaurant ? restaurant.distance : null }
      </li>
    </div>
  )
}

export default Restaurant