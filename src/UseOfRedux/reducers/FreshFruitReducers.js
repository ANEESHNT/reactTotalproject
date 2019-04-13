import type from '../../types'

const {
    FETCH_POSTS,
    UPDATE_CART_COUNT,
    
} = type;


const initialState ={
    items:[],
    count: null
}

export default function FreshFruitFetchPost(state= initialState, action){
        switch(action.type){
            case FETCH_POSTS:
                return {
                ...state,
                items:action.payload
            };
            case UPDATE_CART_COUNT:
            return {
                ...state,
                count: action.payload
            }
            default:
            return state;

        }
    }
