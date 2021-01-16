import React from 'react'

const Menus = (props) => {

  return (
    <div>
      {props.menus && props.menus.map(menu =>
        <li key={menu.id}>{menu.name} + {menu.description}</li>
        )}
    </div>
  )
}

export default Menus