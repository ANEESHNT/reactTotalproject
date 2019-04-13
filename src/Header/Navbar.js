import React, { Component } from 'react';
import './Navbar.css'
import Searchbar from './Searchbar';
import Login from './Login'
import Signin from './Signin';
import Cart from './Cart'
import Dropdown from './Dropdown'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



class Header extends Component {
  render() {
    return (
      <div style={{width: "100%"}}>
      
  <navbar className="navbar fixed-top" >
  <Dropdown/>
  <Searchbar />
  <Login />
  <Link to="Signin"><button >Signin </button>
</Link>
  <li className="nav-item">
                  <Link to={'/'} className="nav-link">Index</Link>
                </li>
                <Link to="Cart"><button>Cart</button></Link>
  
  
  

  </navbar>

      </div>
    );
  }
}

export default Header;
