import React from 'react'
import { useSelector } from 'react-redux'
import {connect} from 'react-redux'
import { Table } from 'react-bootstrap'
import {deleteItem} from '../actions/cartActions'

const ShoppingCart = (props) => {
  const cart = useSelector(state => state.cartReducer.carts)

  function handleClick(cart) {
    props.deleteItem(cart)
  }

  return (
    <div>
      <h1>Cart</h1>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Restaurant</th>
              {/* <th>Items</th> */}
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            
              {cart.map(cart => {
                return (
                <div>
                  <tr>
                    <td>
                      {cart.restaurant.name}
                    </td>
                    <td>
                      {cart.item.name}
                    </td>
                    <td>
                      ${cart.item.price}
                    </td>                 
                  </tr>
                  <button onClick={()=>{handleClick(cart)}}>X</button>
                  </div>
                  )
                })}
                  <td>
                    ${cart.reduce((acc, cart) => {
                        return acc + parseInt(cart.item.price)
                        }, 0)}.00
                  </td>
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
    deleteItem: (cart) => {dispatch(deleteItem(cart))}
  }
}

export default connect(mapToStateProps, mapDispatchToProps)(ShoppingCart)