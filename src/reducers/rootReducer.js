import userReducer from './userReducer'
import restaurantReducer from './restaurantReducer'
import menuReducer from './menuReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    userReducer,
    restaurantReducer,
    menuReducer
})

export default rootReducer