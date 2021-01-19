import React from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../actions/cartActions'
import {Link} from 'react-router-dom'

const Restaurant = (props) => {

  let restaurant = props.restaurants[props.match.params.id - 1]

  function handleClick(restaurant, menu) {
    props.addToCart(restaurant, menu)
  }

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
          {restaurant.menus.map(menu =>
          <div key={menu.id}>
            <h3><b>{menu.name} ${menu.price}</b></h3>
            <h5>{menu.description}</h5>
            <button onClick={()=>{handleClick(restaurant, menu)}}>Add item to cart</button>
          </div>
          )}
          <Link to='/cart'>Checkout</Link>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (restaurant, menu) => {dispatch(addToCart(restaurant, menu))}
  }
}

export default connect(null, mapDispatchToProps)(Restaurant)