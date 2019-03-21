import React, { Component } from 'react'
import ReactImageMagnify from 'react-image-magnify';
import './ProductDetails.css'







const image = 'image/';
const images = [
  {name: 'apples.jpg', vw: '355w'},
 
];


export default class ProductDetails extends Component {
  get srcSet() {
    return images.map(image => {
      return `${image}${image.name} ${image.vw}`;
    }).join(', ')
  }    
  render() {
    const {obj}= this.props.location.state
    console.log(obj)
    return (
        <div className="row">
     
        <div className="col-sm-6">
        <div className="image">
        <ReactImageMagnify {...{
          smallImage: {
            alt: 'apple from London',
            isFluidWidth: true,
            src: `${image}apples.jpg`,
            srcSet: this.srcSet,
            sizes: '(min-width: 500px) 33.5vw, (min-width: 215px) 25vw, 50vw',
          },
          largeImage: {
            alt: '',
            src: `${image}apples.jpg`,
            width: 1000,
            height: 500
          },
          isHintEnabled:false
        }}/>
          <p style={{backgroundColor:"#5f5f5f"}}>hello</p>
      </div>
       </div>
        
        <div className="col-sm-4">
          <h1>haii</h1>
          <p>SIZES</p>
          <div class="form-check">
    <label class="form-check-label">
      <input type="radio" class="form-check-input" name="radio"/>Option 1
    </label>
  </div>
  <div class="form-check">
    <label class="form-check-label">
      <input type="radio" class="form-check-input" name="radio"/>Option 2
    </label>
  </div>
  <div class="form-check disabled">
    <label class="form-check-label">
      <input type="radio" class="form-check-input" name="radio" />Option 3
    </label>
  </div>
  <br/>
          <br/>
          <p>GET 20% OFF</p>
          <br/>
          <p>MRP:<del>RS 80.00</del></p>
          <br/>
          <p>include all Taxes</p>
          <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" >QTY</span>
    </div>
    <input type="text" class="form-control col-2" />
    <div style={{paddingLeft:"30px"}}>
    <button className="btn btn-warning">ADD<i className="fas fa-shopping-cart"></i></button>
    </div>
    </div>
    </div>
    </div>
   
    
          
    )
  }
}
