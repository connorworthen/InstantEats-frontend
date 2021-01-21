export default function cartReducer(state = { carts: []}, action) {

    let cart;

    switch(action.type) {

        case 'ADD_TO_CART':
            cart = [...state.carts, action.payload]

            return {
                carts: cart,
            }
        
        case "DELETE_ITEM": 
            console.log(state.carts, action.payload)
            return {
                carts: [...state.carts.filter(cart => cart !== action.payload)]
            }
        default:
            return state
    }
}
