import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Create from './components/create.component';
import Index from './components/index.component';
import ProductDetails from './components/ProductDetails';
import Searchbar from './components/Searchbar'
import Cart from './components/Cart'
import Signin from './Header/Signin'
import Order from './components/Order'
import Home from './Home';
import TableRow from './components/TableRow';
import Footer from './Footer';
import ImageZoom from './ImageZoom';
import Header from './Header/Navbar';
import Store from './Store';

//import ImageZoom from './components/ImageZoom';

class App extends Component {
  render() {
    return (
      <Router>
    
     <div>
         <Header/>
         <br/>
         <br/>
         <br/>
         
          {/* <ImageZoom/> */}
         
          
      <Switch>
              <Route exact path='/create' component={ Create } /> 
             <Route  exact path='/' component={ Index } /> 
               <Route path='/ProductDetails' component={ ProductDetails} /> 
               <Route path='/TableRow' component={TableRow}/> 
               <Route path ="/Stores" component={Store} />
               <Route path="/Signin" component={Signin}/>
    </Switch> 
    
           <Footer/>
      
     
      </div>
         
      </Router> 
    );
  }
}

export default App;
