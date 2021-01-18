import React from 'react'
import Menus from '../components/Menus'
import {Route} from 'react-router-dom'

// import Restaurants from '../components/Restaurants'

class MenusContainer extends React.Component {

  

  render() {
    return (
      <div>
        <Menus menus={this.props.restaurant && this.props.restaurant.menus}/>
        
      </div>
    )
  }
}

export default MenusContainer