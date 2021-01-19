import React from 'react'
import { useSelector } from 'react-redux'
import {connect} from 'react-redux'
import { Table } from 'react-bootstrap'

const ShoppingCart = (props) => {

  const cart = useSelector(state => state.cartReducer.cart)
  // debugger
  console.log(cart)

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

export default connect(mapToStateProps)(ShoppingCart)