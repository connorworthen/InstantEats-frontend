import React from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../actions/cartActions'
import CartsContainer from '../containers/CartsContainer'

const Menus = (props) => {

  function handleClick(id) {
    props.addToCart(id)
  }

  return (
    <div>
      {props.menus && props.menus.map(menu =>
        <div key={menu.id}>
            <h3><b>{menu.name} ${menu.price}</b></h3>
            <h5>{menu.description}</h5>
            <button onClick={()=>{handleClick(menu.id)}}>Add item to cart</button>
        </div>
        )}
        <CartsContainer />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {dispatch(addToCart(id))}
  }
}

export default connect(null, mapDispatchToProps)(Menus)