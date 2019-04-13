import React, { Component } from 'react'
import ReactImageMagnify from 'react-image-magnify';
import './FreshfruitProductDetail.css'
import * as actions from '../../../UseOfRedux/actions'
import {connect} from 'react-redux'
import Sidebar from '../../sidebar/Sidebar'

const image = 'image/';
const images = [{ name:''}];


class FreshFruitProductDetails extends Component {

     
     get srcSet() {
          return images.map(image => {
               return `${image.name} ${image.vw}`;}).join(', ')}



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
                         const {obj} = this.props.location.state
                         console.log(obj)
               return(
                    <div>
                    <Sidebar/>
                    <div className="container">
                         <div className="row">
                              <div className="col-sm-6">
                                   <div className="image">
                                        <ReactImageMagnify {...{
                                             smallImage: {
                                             alt: 'apple from London',
                                             isFluidWidth: true,
                                             src: 'http://localhost:4000/'+obj.image,
                                             sizes: '(min-width: 500px) 33.5vw, (min-width: 215px) 25vw, 50vw',
                                             },
                                             largeImage: {
                                             alt: '',
                                             src:'http://localhost:4000/'+obj.image,
                                             width: 1000,
                                             height: 500,
                                             },
                                             isHintEnabled:false
                                        }}/>
                                        <p style={{backgroundColor:"#5f5f5f"}}>hello</p>
                                   </div>
                              </div>
                              <div className="copy">
                                   <h1>{obj.pname}</h1>
                                   <p>SIZES</p>
                                   <div>
                                        <label class="form-check-label">
                                             <input type="radio"  name="radio"/>Option 1
                                        </label>
                                        <br/>
                                        <label class="form-check-label">
                                             <input type="radio"  name="radio"/>Option 2
                                        </label>
                                        <br/>
                                        <label class="form-check-label">
                                             <input type="radio"  name="radio" />Option 3
                                        </label>
                                   </div>
                                        <br/>
                                        <br/>
                                   <p>GET 20% OFF</p>
                                        <br/>
                                   <p>MRP:<del>RS 80.00</del></p>
                                        <br/>
                                   <p>include all Taxes</p>
                                        <br/>
                                   <div class="input-group mb-3">
                                   <div className="text-center">
                                        QTY:
                                        <select>
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
                                             
                                        <div style={{paddingLeft:"30px"}}>
                                             <button   onClick={() => this.handleCart(obj)}
                                             className="btn btn-warning">ADD<i className="fas fa-shopping-cart"></i></button>
                                        </div>
                                   </div>
                              </div>
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
 
 export default connect(mapStateToProps, mapDispatchToProps)(FreshFruitProductDetails);
 