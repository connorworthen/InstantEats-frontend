import React from 'react'
// import {Route} from 'react-router-dom'
import Restaurant from './Restaurant'

const Restaurants = (props) => {
  // console.log(props)
  return (
    <div> 
      {props.restaurants.map(restaurant =>
        <div key={restaurant.id}><Restaurant restaurant={restaurant}/></div>)}
    </div>
  )
}

export default Restaurants