export default function cartReducer(state = { cart: []}, action) {

    let cart;

    switch(action.type) {

        case 'ADD_TO_CART':
            cart = [...state.cart, action.payload]

            return {
                cart: cart,
            }
        
        case "DELETE_ITEM":
            console.log(state.cart, action.payload)
            // need to delete the payload & update state & state.cart holds all items collected in cart
            debugger
            cart = [...state.cart.filters(cart => cart.id !== action.payload.id)]
            // cart coming back undefined fix cart
            
            return {
                cart: cart
            }

        default:
            return state
    }
}
