import React, { useState } from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../actions/cartActions'
import {Link} from 'react-router-dom'
import {ListGroup} from 'react-bootstrap'

const Restaurant = (props) => {

  let restaurant = props.restaurants[props.match.params.id - 1]

  function handleClick(restaurant, item) {
    props.addToCart(restaurant, item)
  }

  const [data, setData] = useState(restaurant.items)

  const sortByPrice = () => {
    const sorted = [...data].sort((a, b) => a.price - b.price)
    setData(sorted)
  }


  return (
    <div>
      <ListGroup>
        <ListGroup.Item ><h1>{restaurant.name}</h1></ListGroup.Item>
        <ListGroup.Item><b>Category:</b> {restaurant.category}</ListGroup.Item>
        <ListGroup.Item><b>Address:</b> {restaurant.address}</ListGroup.Item>
        <ListGroup.Item><b>Phone Number:</b>{restaurant.phone_number}</ListGroup.Item>
        <ListGroup.Item><b>Hours:</b>{restaurant.hours}</ListGroup.Item>
        <ListGroup.Item><b>Price:</b> {restaurant.price}</ListGroup.Item>
        <ListGroup.Item><b>ETA:</b> {restaurant.eta}</ListGroup.Item>
        <ListGroup.Item><b>Distance:</b> {restaurant.distance}</ListGroup.Item>
        
      </ListGroup>
        <h1>Our Menu</h1> <button onClick={sortByPrice}>Sort By Price</button>
          {data.map((item, i)=>
          <div key={i}>
            <h3><b>{item.name} ${item.price}</b></h3>
            <h5>{item.description}</h5><br></br>

            <button onClick={()=>{handleClick(restaurant, item)}}>Add item to cart</button><br></br>
          </div>
          )}
          <br></br>
          <button><Link to='/cart'>Checkout</Link></button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (restaurant, item) => {dispatch(addToCart(restaurant, item))}
  }
}

export default connect(null, mapDispatchToProps)(Restaurant)