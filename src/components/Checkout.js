import React from 'react'
import {connect} from 'react-redux'
import { Table } from 'react-bootstrap'

const ShoppingCart = (props) => {

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
            <tr>
              <td>
                {props.cartReducer.cart.name}
              </td>
              <td>
                {props.cartReducer.cart.menus.name}
              </td>
              <td>
                {props.cartReducer.cart.menus.price}
              </td>  
            </tr>
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