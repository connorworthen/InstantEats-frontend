import userReducer from './userReducer'
import restaurantReducer from './restaurantReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    userReducer,
    restaurantReducer
})

export default rootReducer