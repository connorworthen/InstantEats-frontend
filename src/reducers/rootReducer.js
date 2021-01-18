import userReducer from './userReducer'
import restaurantReducer from './restaurantReducer'
import cartReducer from './cartReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    userReducer,
    restaurantReducer,
    cartReducer
})

export default rootReducer