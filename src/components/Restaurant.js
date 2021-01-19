import React from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../actions/cartActions'
import {Link} from 'react-router-dom'
import MenusContainer from '../containers/MenusContainer'

const Restaurant = (props) => {
  console.log(props)
  let restaurant = props.restaurants[props.match.params.id - 1]

  function handleClick(restaurant, id) {
    props.addToCart(restaurant, id)
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
            <button onClick={()=>{handleClick(restaurant, menu.id)}}>Add item to cart</button>
          </div>
          )}
          <Link to='/cart'>Checkout</Link>
        {/* <MenusContainer restaurant={restaurant}/> */}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (restaurant, id) => {dispatch(addToCart(restaurant, id))}
  }
}

export default connect(null, mapDispatchToProps)(Restaurant)