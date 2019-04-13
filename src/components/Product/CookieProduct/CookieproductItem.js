import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CookieProductItem.css';
import {Link} from 'react-router-dom';
import * as actions from  '../../../UseOfRedux/actions'
import {connect} from 'react-redux'

class ProductItem extends Component {

    state={
        qtyValue: 0
    }

    handleCart =(param)=> {
        console.log(param)
        const quantity = this.props.count;
        
        // get pname, id, price
        const id = param._id;
        const price = param.price;
        const pname = param.pname;
        const image = param.image
        let cartObj ={
            id,
            price,
            pname,
            image,
            quantity
        }
        // dispatch action to save all this in redux store 
         this.props.AddToCart(cartObj)

    }
    handleSelectChange=(e)=>{
        // const {qtyValue} = this.state;
        if(this.state.qtyValue === 0){
            this.props.handleCartCount(this.state.qtyValue)
        }else{
            this.setState({
                qtyValue: e.target.value
            }, ()=> {
                this.props.handleCartCount(this.state.qtyValue)
            })
        }
        
         
    }
render() {
    
return (
    <div className="col-3 py-3 px-1" >
        <div className="card">
            <div className="img-container">
                <p style={{textAlign:"right",color:"red"}}>GET25%<i className="fas fa-star"></i></p>
                    <hr style={{height:"1px",backgroundColor:"green"}} />
                    <br/>
                    <div className="product-image">
                    <div className="text-center">
                       <Link to={{
                           pathname:"/ProductDetails",
                           state:{obj:this.props.product}
                           }}> <img src={"http://localhost:4000/"+this.props.product.image} alt="product" style={{width: "150px", height: "150px", pointerEvents: "all"}} 
                            // onClick={ this.handleProduct}
                        /></Link>
                        <div className="text-sm-center text-dark btn"><h5 >{this.props.product.pname}</h5>
                        </div>
                    </div>
                    </div>
                        <hr/>

                        <div className="form-group  ">
                            <div className="input-group input-group-sm justify-content-center">
                                <input type="text" className="form-control col-5"></input>
                                <select className="form-control col-5" name="">
                                <option >KiloGram.</option>
                                <option >Gram.</option>
                                </select>
                            </div>
                        </div>
                        <span  className="text-center"><p>MRP:<del>Rs 15</del><ins> {this.props.product.price}</ins></p></span>
                             <div className="text-center">
                             QTY:
                             <select  value={this.state.qtyValue} onChange={this.handleSelectChange}  >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                            </div>

                        <br style ={{lineHeight:"1px"}}/>
                        <div className="text-center">
                            <button  onClick={() => this.handleCart(this.props.product)}
                                className="btn btn-warning cart-btn-sm col-5" ><i className="fas fa-shopping-cart">Cart</i></button>
                            {/* <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(this.props.product._id)}}><i className="material-icons">add</i></span> */}
        
                        </div>
                        <br style ={{lineHeight:"1px"}}/>
            </div>
        </div>
    </div>
)
}
}

const mapStateToProps =state=>({
    count: state.fetchPost.count
})
const mapDispatchToProps =dispatch=>({
    handleCartCount: (params)=> dispatch(actions.handleCartCount(params)),
    AddToCart: (params)=> dispatch(actions.AddToCart(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
