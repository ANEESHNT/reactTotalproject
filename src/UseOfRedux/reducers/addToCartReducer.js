import type from '../../types';

const {ADD_TO_CART,DELETE_FROM_CART} = type;

const initialState={
    cartDetails: []
}
export default function addToCart (state= initialState, action){
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cartDetails: [...state.cartDetails, action.payload]
            }
            case DELETE_FROM_CART:
            return{
                ...state,
                cartDetails: action.payload
                
            }
            default:
            return state;
    }
}
