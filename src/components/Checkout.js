import React from 'react'
import { useSelector } from 'react-redux'
import {connect} from 'react-redux'
import { Table } from 'react-bootstrap'
import {deleteItem} from '../actions/cartActions'

const ShoppingCart = (props) => {
  // console.log(props)
  const cart = useSelector(state => state.cartReducer.cart)

  function handleClick(restaurant, menu) {
    console.log(restaurant, menu)
    debugger
    props.deleteItem(restaurant, menu)
  }

  return (
    <div>
      <h1>Cart</h1>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Restaurant</th>
              <th>Items</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            
              {cart.map(cart => {
                // debugger
                return (
                <div>
                  <tr>
                    <td>
                      {cart.restaurant.name}
                    </td>
                    <td>
                      {cart.menu.name}
                    </td>
                    <td>
                      {cart.menu.price}
                    </td>                 
                  </tr>
                  <button onClick={()=>{handleClick(cart.restaurant, cart.menu)}}>X</button>
                </div>
                )
              })}
          </tbody>
        </Table>
    </div>
  )
}

const mapToStateProps = state => {
  return {
    cartReducer: state.cartReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (restaurant, menu) => {dispatch(deleteItem(restaurant, menu))}
  }
}

export default connect(mapToStateProps, mapDispatchToProps)(ShoppingCart)