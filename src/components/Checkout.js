import React from 'react'
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
                Restaurant Name
              </td>
              <td>
                Food Items
              </td>
              <td>
                Total $$
              </td>  
            </tr>
          </tbody>
        </Table>
    </div>
  )
}

export default ShoppingCart