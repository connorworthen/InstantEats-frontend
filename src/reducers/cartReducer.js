export default function cartReducer(state = { carts: []}, action) {

    switch(action.type) {

        case 'ADD_TO_CART':
            return {
                carts: [...state.carts, action.payload]
            }
        
        case "DELETE_ITEM": 
            debugger
            return {
                carts: [...state.carts.filter((cart) => cart !== action.payload)]
            }
            
        default:
            return state
    }
}