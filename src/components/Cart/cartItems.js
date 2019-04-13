import React, { Component } from 'react'
import {Card} from 'react-bootstrap'
import {connect} from 'react-redux';
import * as actions from '../../UseOfRedux/actions'

class CartItem extends Component {

    handleDeleteFromCart=(activeId)=> {
        const {cartDetails} = this.props;
        // console.log(activeId, cartDetails)
        
        for(let a =0; a<cartDetails.length; a++){
            if(activeId === cartDetails[a].id){
                 let newItem = cartDetails.filter((cart)=> cart.id  !== activeId) 
                //   console.log('hi')
                  this.props.deleteFromCart(newItem)
             }
        }
        
        
    }

  render() {
    return (
        <div className="card" style={{height: 220,width:1000}}>
        <br/>
                    <div className="img-container">

 <img src={"http://localhost:4000/"+this.props.cart.image} alt="product" style={{width: "150px", height: "200px"}} />      
 </div>
      <div style={{paddingLeft: 200, marginTop:'-124px',color:'#007CBE'}}>
      <h3>{this.props.cart.pname}</h3>
          <h6 style={{color:'black'}}>organic product</h6>
          </div>
          <div style={{paddingLeft: 450,marginTop:'-54px'}}>
          <h5><b>Price:{this.props.cart.price}</b></h5> 
          </div>
          <div style={{paddingLeft: 650,marginTop:'-30px'}}>
          <h5>
              <b>Quantity: {this.props.cart.quantity}</b> 
          </h5>
          </div>
          <div style={{paddingLeft: 850,marginTop:'-35px'}}>
          {/* <button style={{color:'white',backgroundColor:'#FB0059'}}>Remove</button> */}
          <button type="button" class="btn btn-danger" onClick={()=>this.handleDeleteFromCart(this.props.cart.id)}>Remove</button>

        </div>  
    </div>
    )
  }
}

const mapStateToProps=state=>({
    cartDetails: state.addToCart.cartDetails
    })
const mapDispatchToProps=dispatch => ({
    deleteFromCart: (params)=> dispatch(actions.deleteFromCart(params))
})
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
