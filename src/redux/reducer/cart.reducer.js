import { ADD_CART_SUCCESS, GET_CART_SUCCESS } from "../constant/cart.constent";

const initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    currentCart: localStorage.getItem('current_cart') ? 
        JSON.parse(localStorage.getItem('current_cart')) : {
            subTotal: 0,
            tax: 0,
            grandTotoal: 0,
            items: [],
            user: {},
            orderPlaced: false,
        }
}

const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_CART_SUCCESS:

            let data = [...action.payload]

            localStorage.setItem('cart', JSON.stringify(data));
            
            return {
                ...state,
                cart: data
            }

        case ADD_CART_SUCCESS: 
            
            return {
                ...state,
                currentCart: {...action.payload}
            }

        default:
            return state
    }
}

export default cartReducer;
