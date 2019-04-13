import React, { Component } from 'react'
import './Home.css';
//import {Link} from 'react-router-dom';
import Slide from './Slide';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from  './UseOfRedux/actions';


class Home extends Component {
  handleFetchAllPost =()=>{
    // history.location.push('/Product')
    this.props.history.push('/ProductList');
    this.props.fetchAllPosts()
  }
  flourHandleFetchAllPost =()=>{
    // history.location.push('/Product')
    this.props.history.push('/FlourProductList');
    this.props.FlourFetchAllPosts()
  }
  OilHandleFetchAllPost =()=>{
    // history.location.push('/Product')
    this.props.history.push('/OilProductList');
    this.props.OilFetchAllPosts()
  }
  RiceHandleFetchAllPost =()=>{
    // history.location.push('/Product')
    this.props.history.push('/RiceProductList');
    this.props.RiceFetchAllPosts()
  }
  HealthHandleFetchAllPost =()=>{
    // history.location.push('/Product')
    this.props.history.push('/HealthProductList');
    this.props.HealthFetchAllPosts()
  }
  CookieHandleFetchAllPost =()=>{
    // history.location.push('/Product')
    this.props.history.push('/CookieProductList');
    this.props.CookieFetchAllPosts()
  }
  CoffeeHandleFetchAllPost =()=>{
    // history.location.push('/Product')
    this.props.history.push('/CoffeeProductList');
    this.props.CoffeeFetchAllPosts()
  }
  JuiceHandleFetchAllPost =()=>{
    // history.location.push('/Product')
    this.props.history.push('/JuiceProductList');
    this.props.JuiceFetchAllPosts()
  }
  FreshFruitFetchAllPost =()=>{
    // history.location.push('/Product')
    this.props.history.push('/FreshFruitProductList');
    this.props.FreshFruitFetchAllPosts()
  }
  FreshVegFetchAllPost =()=>{
    // history.location.push('/Product')
    this.props.history.push('/FreshVegProductList');
    this.props.FreshVegFetchAllPosts()
  }
  ExoticFetchAllPost =()=>{
    // history.location.push('/Product')
    this.props.history.push('/ExoticProductList');
    this.props.ExoticFetchAllPosts()
  }
  DetergentFetchAllPost =()=>{
    // history.location.push('/Product')
    this.props.history.push('/DetergentProductList');
    this.props.DetergentFetchAllPosts()
  }
  DalFetchAllPost =()=>{
    // history.location.push('/Product')
    this.props.history.push('/DalProductList');
    this.props.DalFetchAllPosts()
  }
  render() {
    return(
     <div>
       <Slide/>
<div className="row">

      <div className="col-sm-3">
      <div className="card" style={{height:'220px',width:'300px'}}>
      <div className="img-container p-0">
      
      <img src='Bread.jpg' onClick={this.handleFetchAllPost} alt="items" className="card-img-top" />

      </div>
      </div>
      
      </div>
    
      <div className="col-sm-3">                                                                                                                                                                                        
      
      <div className="card" style={{height:'220px',width:'300px'}}>
      <div className="img-container p-0">
      
      <img src=" flour.jpg"  onClick={this.flourHandleFetchAllPost}alt="items" className="card-img-top" style={{height:'210px',width:'280px'}}/>
     
      </div>
      </div>
      
       </div>
       
       
       <div className="col-sm-3">
      
      <div className="card" style={{height:'220px',width:'300px'}}>
      <div className="img-container p-0">
      <img src="rice.jpg"  onClick={this.RiceHandleFetchAllPost} alt="items" className="card-img-top" style={{height:'210px',width:'280px'}}/>
      </div>
      </div>
      
      </div>
      <div className="col-sm-3">
      
      <div className="card" style={{height:'220px',width:'300px'}}>
      <div className="img-container p-0">
      <img src="oil.jpg"  onClick={this.OilHandleFetchAllPost} alt="items" className="card-img-top" />
      </div>
      </div>
      
      </div>
  
      
      <div className="col-xs-12">
      
      
      <div className="card">
      <div className="img-container p-0">
      <img src="vaseline.jpg" alt="items" className="card-img-top"/>
      </div>
      </div>
      
      </div>
      
      
      <div className="col-sm-6">
      
      <div className="card">
      <div className="img-container p-0">
      <img src="new.jpg"  onClick={this.DetergentFetchAllPost} alt="items" className="card-img-top"/>
      </div>
      </div>
      
      </div>
      
      
      <div className="col-sm-6">
      <div className="card">
      <div className="img-container p-0">
      <img src="Dal.jpg"  onClick={this.DalFetchAllPost } alt="items" className="card-img-top"/>
      </div>
      </div>
      </div>  
     
      <div className="col-sm-2"> 
      <div className="card">
      <div className="img-container p-0">
      <img src="chocolate.jpg" alt="items" className="card-img-top"/>
      </div>
      </div>
      </div>
      
      <div className="col-sm-2">
      <div className="card">
      <div className="img-container p-0">
      <img src="snacks.jpg" alt="items" className="card-img-top"/>
      </div>
      </div>
      </div>
     
      <div className="col-sm-2">
      <div className="card">
      <div className="img-container p-0">
      <img src="juice.jpg"  onClick={this.JuiceHandleFetchAllPost} alt="items" className="card-img-top"/>
      </div>
      </div>
      </div>
      
      <div className="col-sm-2">
      <div className="card">
      <div className="img-container p-0">
      <img src="tea.jpg"   onClick={this.CoffeeHandleFetchAllPost }  alt="items" className="card-img-top"/>
      </div>
      </div>
     </div>
     
      
      
      <div className="col-sm-2">
      <div className="card">
      <div className="img-container p-0">
      <img src="biscuits.jpg" onClick={this.CookieHandleFetchAllPost }  alt="items" className="card-img-top"/>
      </div>
      </div>
      </div>
       
      <div className="col-sm-2">
      <div className="card">
      <div className="img-container p-0">
      <img src="drink.jpg" onClick={this.HealthHandleFetchAllPost} alt="items" className="card-img-top"/>
      </div>
      </div>
      </div>
      
       
      <div className="col-sm-3">
      <div className="card">
      <div className="img-container p-0">
      <img src="Freshfruits.jpg"   onClick={this.FreshFruitFetchAllPost} alt="items" className="card-img-top"/>
      </div>
      </div>
      </div>
      
      <div className="col-sm-3">
      <div className="card">
      <div className="img-container p-0">
      <img src="Freshveg.jpg" onClick={this.FreshVegFetchAllPost} alt="items" className="card-img-top"/>
      </div>
      </div>
      </div>
     
      <div className="col-sm-3">
      <div className="card">
      <div className="img-container p-0">
      <img src="tendercoconut.jpg" alt="items" className="card-img-top"/>
      </div>
      </div>
      </div>
     
      <div className="col-sm-3">
      <div className="card">
      <div className="img-container p-0">
      <img src="Exotic.jpg"  onClick={this.ExoticFetchAllPost} alt="items" className="card-img-top"/>
      </div>
      </div>
      </div>



      <div className="col-sm-3">
      <div className="card">
      <div className="img-container p-0">
      <img src="creams.jpg" alt="items" className="card-img-top"/>
      </div>
      </div>
      </div>
      
      <div className="col-sm-3">
      <div className="card">
      <div className="img-container p-0">
      <img src="shampoo.jpg" alt="items" className="card-img-top"/>
      </div>
      </div>
      </div>
     
      <div className="col-sm-3">
      <div className="card">
      <div className="img-container p-0">
      <img src="shower.jpg" alt="items" className="card-img-top"/>
      </div>
      </div>
      </div>
     
      <div className="col-sm-3">
      <div className="card">
      <div className="img-container p-0">
      <img src="hair oil.jpg" alt="items" className="card-img-top"/>
      </div>
      </div>
      </div>
      
      <div className="col-sm-3">
      <div className="card">
      <div className="img-container p-0">
      <img src="feminine.jpg" alt="items" className="card-img-top"/>
      </div>
      </div>
      </div>
      
      <div className="col-sm-3">
      <div className="card">
      <div className="img-container p-0">
      <img src="sexual.jpg" alt="items" className="card-img-top"/>
      </div>
      </div>
      </div>
      
      <div className="col-sm-3">
      <div className="card">
      <div className="img-container p-0">
      <img src="oral care.jpg" alt="items" className="card-img-top"/>
      </div>
      </div>
      </div>
      
      <div className="col-sm-3">
      <div className="card">
      <div className="img-container p-0">
      <img src="handwash.jpg" alt="items" className="card-img-top"/>
      </div>
      </div>
      </div>
      </div>
      </div>


      

)
  }
}

const mapDispatchToProps = dispatch=> ({
  fetchAllPosts: ()=> dispatch(actions.fetchAllPosts()),
  FlourFetchAllPosts: ()=> dispatch(actions.FlourFetchAllPosts()),
  OilFetchAllPosts: ()=> dispatch(actions.OilFetchAllPosts()),
  RiceFetchAllPosts: ()=> dispatch(actions.RiceFetchAllPosts()),
  HealthFetchAllPosts: ()=> dispatch(actions.HealthFetchAllPosts()),
  CookieFetchAllPosts: ()=> dispatch(actions.CookieFetchAllPosts()),
  CoffeeFetchAllPosts: ()=> dispatch(actions.CoffeeFetchAllPosts()),
  JuiceFetchAllPosts: ()=> dispatch(actions.JuiceFetchAllPosts()),
  FreshFruitFetchAllPosts: ()=>dispatch(actions.FreshFruitFetchAllPosts()),
  FreshVegFetchAllPosts: ()=>dispatch(actions.FreshVegFetchAllPosts()),
  DalFetchAllPosts: ()=>dispatch(actions.DalFetchAllPosts()),
  DetergentFetchAllPosts: ()=>dispatch(actions.DetergentFetchAllPosts()),
  ExoticFetchAllPosts: ()=>dispatch(actions.ExoticFetchAllPosts()),




})

export default withRouter(connect(null, mapDispatchToProps)(Home));
