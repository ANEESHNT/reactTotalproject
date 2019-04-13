
import type from '../../types'

const {
    FETCH_DETAIL_POSTS
} = type;


const initialState ={
    details:[],
}

export default function fetchDetailedPost(state= initialState, action){
        switch(action.type){
            case FETCH_DETAIL_POSTS:
                return {
                ...state,
                items:action.payload
            };
            default:
            return state;

        }

    }
