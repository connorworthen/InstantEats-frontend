import React from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../actions/cartActions'
import {Link} from 'react-router-dom'
import CartsContainer from '../containers/CartsContainer'

const Menus = (props) => {
  console.log(props)
  
  function handleClick(menu) {
    props.addToCart(menu)
  }

  return (
    <div>
      {props.menus && props.menus.map(menu =>
        <div key={menu.id}>
            <h3><b>{menu.name} ${menu.price}</b></h3>
            <h5>{menu.description}</h5>
            <button onClick={()=>{handleClick(menu)}}>Add item to cart</button>
            <Link to='/cart'>Checkout</Link>
        </div>
        )}
        <CartsContainer />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (menu) => {dispatch(addToCart(menu))}
  }
}

export default connect(null, mapDispatchToProps)(Menus)