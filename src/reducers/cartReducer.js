export default function cartReducer(state = { cart: []}, action) {

    // let item;
    // let cart;

    switch(action.type) {

        case "START_REQUESTING_CART":
            return {
                cart: [],
                requesting: true,
                loaded: false
            }

        case 'ADD_TO_CART':
            console.log(action.payload)
            return {
                cart: action.payload,
                requesting: false,
                loaded: true
            }
            // cart = [...state.cart]

            // item = action.payload

            // cart.push(item)

            // return {
            //     cart: cart,
            //     requesting: false,
            //     loaded: true
            // }
        
        case "GET_CART":
            return {
                cart: action.payload.lineItems,
                requesting: false,
                loaded: true
            }

        default:
            return state
    }
}
