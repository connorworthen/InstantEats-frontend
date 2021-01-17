import React from 'react'

const Menus = (props) => {

  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <div>
      {props.menus && props.menus.map(menu =>
        <div key={menu.id}>
            <h3><b>{menu.name} ${menu.price}</b></h3>
            <h5>{menu.description}</h5>
            <button onClick={handleClick}>Add item to cart</button>
        </div>
        )}
    </div>
  )
}

export default Menus