import { combineReducers } from 'redux';
// import fetchDetailedPost from './productDetailReducer';
import fetchPost from './postReducers';
import addToCart from  './addToCartReducer'
import FlourFetchPost from './FlourReducers'
import OilFetchPost from './OilReducers'
import RiceFetchPost from './RiceReducers'
import HealthFetchPost from './HealthReducers'
import CoffeeFetchPost from './CoffeeReducers'
import CookieFetchPost from './CookieReducers'
import JuiceFetchPost from  './JuiceReducers'
import FreshFruitFetchPost from './FreshFruitReducers'
import FreshVegFetchPost from './FreshVegReducers'
import ExoticFetchPost from './ExoticReducers'
import DetergentFetchPost from './DetergentReducers'
import DalFetchPost from './DalReducers'
export default combineReducers({
    fetchPost,
    // fetchDetailedPost,
    addToCart,
    FlourFetchPost,
    OilFetchPost,
    RiceFetchPost,
    HealthFetchPost,
    CoffeeFetchPost,
    CookieFetchPost,
    JuiceFetchPost,
    FreshFruitFetchPost,
    FreshVegFetchPost,
    ExoticFetchPost,
    DetergentFetchPost,
    DalFetchPost


});
