import type from '../../types';

const {ADD_TO_CART, UPDATE_CART_COUNT,DELETE_FROM_CART} = type;

export const AddToCart =(data)=> ({
    type: ADD_TO_CART,
    payload: data
})

export const handleCartCount =(data)=> ({
    type: UPDATE_CART_COUNT,
    payload: data
})

export const deleteFromCart =(_id)=>({
    type:DELETE_FROM_CART,
    payload:_id
})
