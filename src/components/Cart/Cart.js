import React, { Component } from 'react'
import {connect} from 'react-redux'
// import './Cart.css';
import { Link } from 'react-router-dom';
import CartItems from './cartItems';
class Cart extends Component {
  render() {
    const {cartDetails}= this.props;
    return (
        <div>
        <h2>Shopping Cart:</h2>
<div className="container" style={{backgroundColor:"whitesmoke",paddingLeft:'100px'}}>
    <div className="row" >

{ cartDetails.map((body, i)=>(
    <CartItems key={i}   cart={body}/>      
        ))}
</div>
</div>
<hr style={{height:"1px"}} />

 <div className="container" style={{paddingLeft: 630 }}>
 <div className="card" style={{height: 150,width:510}}>

            <h5 className="subtotal">SUBTOTAL:</h5>
            <br/>
            <hr/>
            <div className="checkout" style={{paddingLeft:'200px'}}>
            <Link to="CheckOut">
            <button type="button" class="btn btn-success" style={{padding:'15px'}}>Checkout</button>
            </Link>
            </div>
          </div>
 </div>   
</div>


      
   )
  }
}

const mapStateToProps=state=>({
    cartDetails: state.addToCart.cartDetails
    })
    
  export default  connect(mapStateToProps, null)(Cart)
  
