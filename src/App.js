import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Create from './components/create.component';
import Index from './components/index.component';
import Searchbar from './components/Searchbar'
import Signin from './Header/Signin'
import Order from './components/Order'
import Home from './Home';
import ProductList from './components/Product/BreadProduct/BreadproductList'
import ProductDetails from './components/Product/BreadProduct/BreadProductDetail'
import FlourProductList from './components/Product/FlourProduct/FlourproductList';
import FlourProductDetails from './components/Product/FlourProduct/FlourProductDetail'
import OilProductList from './components/Product/OilProduct/OilproductList';
import OilProductDetails from './components/Product/OilProduct/OilProductDetail';
import RiceProductList from './components/Product/OilProduct/OilproductList';
import RiceProductDetails from './components/Product/OilProduct/OilProductDetail';
import HealthProductList from './components/Product/HealthProduct/HealthproductList';
import HealthProductDetails from './components/Product/HealthProduct/HealthProductDetail';
import CookieProductList from './components/Product/CookieProduct/CookieproductList'
import CookieProductDetails from './components/Product/CookieProduct/CookieProductDetail'
import CoffeeProductList from './components/Product/CoffeeProduct/CoffeeproductList'
import CoffeeProductDetails from './components/Product/CoffeeProduct/CoffeeProductDetail'
import JuiceProductList from './components/Product/JuiceProduct/JuiceproductList'
import JuiceProductDetails  from './components/Product/JuiceProduct/JuiceProductDetail'
import FreshFruitProductList from './components/Product/FreshFriuts/FreshFruitproductList'
import FreshFruitProductDetails from './components/Product/FreshFriuts/FreshFruitProductDetail'
import FreshVegProductList from  './components/Product/FreshVeg/FreshvegproductList'
import FreshVegProductDetails from './components/Product/FreshVeg/FreshvegProductDetail'
import DalProductList from './components/Product/Dal/DalproductList'
import DalProductDetails from  './components/Product/Dal/DalProductDetail'
import DetergentProductList from './components/Product/Detergents/DetergentproductList'
import  DetergentProductDetails from './components/Product/Detergents/DetergentProductDetail'
import ExoticProductList from './components/Product/Exotic/ExoticproductList'
import ExoticProductDetails from './components/Product/Exotic/ExoticProductDetail'





import Footer from './Footer';
import ImageZoom from './ImageZoom';
import Header from './Header/Navbar';
import Store from  './Stores'
import Cart from './components/Cart/Cart'
import CheckOut from './components/Cart/CheckOut';
//import ImageZoom from './components/ImageZoom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
    
     <div>
         <Header/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
          {/* <ImageZoom/> */}
         
         
      <Switch>
              <Route  exact path='/' component={ Index } /> 
              <Route  path='/create' component={ Create } />
              <Route  path='/Cart' component={Cart}/>
              <Route path= '/CheckOut' component={CheckOut}/> 
               <Route path='/ProductDetails' component={ ProductDetails} /> 
               <Route path='/ProductList' component={ProductList}/> 
               <Route path='/FlourProductList' component={FlourProductList}/> 
               <Route path='/FlourProductDetails' component={FlourProductDetails} /> 
               <Route path='/OilProductList' component={OilProductList}/> 
               <Route path='/OilProductDetails' component={OilProductDetails} /> 
               <Route path='/RiceProductList' component={RiceProductList}/> 
               <Route path='/RiceProductDetails' component={RiceProductDetails} /> 
               <Route path='/HealthProductList' component={HealthProductList}/> 
               <Route path='/HealthProductDetails' component={HealthProductDetails} /> 
               <Route path='/CookieProductList' component={CookieProductList}/> 
               <Route path='/CookieProductDetails' component={CookieProductDetails} /> 
               <Route path='/CoffeeProductList' component={CoffeeProductList}/> 
               <Route path='/CoffeeProductDetails' component={CoffeeProductDetails} /> 
               <Route path='/JuiceProductList' component={JuiceProductList}/> 
               <Route path='/JuiceProductDetails' component={JuiceProductDetails} /> 
               <Route path='/FreshFruitProductList' component={FreshFruitProductList}/> 
               <Route path='/FreshFruitProductDetails' component={FreshFruitProductDetails} /> 
               <Route path='/FreshVegProductList' component={FreshVegProductList}/> 
               <Route path='/FreshVegProductDetails' component={FreshVegProductDetails} /> 
               <Route path='/ExoticProductList' component={ExoticProductList}/> 
               <Route path='/ExoticProductDetails' component={ExoticProductDetails} /> 
               <Route path='/DalProductList' component={DalProductList}/> 
               <Route path='/DalProductDetails' component={DalProductDetails} /> 
               <Route path='/DetergentProductList' component={DetergentProductList}/> 
               <Route path='/DetergentProductDetails' component={DetergentProductDetails} /> 


               <Route path ="/Stores" component={Store} />
               <Route path="/Signin" component={Signin}/>
    </Switch> 
    
           <Footer/>
      
     
      </div>
         
      </Router> 
      </Provider>
    );
  }
}

export default App;
