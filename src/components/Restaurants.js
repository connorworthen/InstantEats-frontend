import React from 'react'
import Restaurant from './Restaurant'

const Restaurants = (props) => {

  return (
    <div>
      {props.restaurants.map(restaurant =>
        <div key={restaurant.id}><Restaurant restaurant={restaurant}/></div> )}
    </div>
  )
}

export default Restaurants