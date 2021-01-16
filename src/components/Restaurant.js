import React from 'react'
import MenusContainer from '../containers/MenusContainer'
// import {Redirect} from 'react-router-dom'

const Restaurant = (props) => {

  let restaurant = props.restaurants[props.match.params.id - 1]

  return (
    <div>
        <h3>{restaurant ? restaurant.name : null }</h3>
        <li>{restaurant ? restaurant.category: null }</li>
        <li>{restaurant ? restaurant.address : null }</li>
        <li>{restaurant ? restaurant.phone_number: null }</li>
        <li>{restaurant ? restaurant.hours : null }</li>
        <li>{restaurant ? restaurant.price : null }</li>
        <li>{restaurant ? restaurant.eta : null }</li>
        <li>{restaurant ? restaurant.distance : null }</li>  

        <MenusContainer restaurant={restaurant}/> 
    </div>
  )
}

export default Restaurant