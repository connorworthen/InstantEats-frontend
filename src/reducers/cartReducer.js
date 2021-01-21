export default function cartReducer(state = { carts: []}, action) {

    let cart;

    switch(action.type) {

        case 'ADD_TO_CART':
            cart = [...state.carts, action.payload]

            return {
                carts: cart,
            }
        
        case "DELETE_ITEM": 
            debugger
            return {
                carts: [...state.carts.filter((carts) => carts !== action.payload)]
            }
            
        default:
            return state
    }
}