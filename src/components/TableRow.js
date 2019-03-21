import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './TableRow.css';


class TableRow extends Component {
  constructor(props) {
    super(props);
    this.onChangeKGG = this.onChangeKGG.bind(this);
    this.onChangeQTY = this.onChangeQTY.bind(this);
   
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      KGG: '',
      QTY: ''
     
    }
  }
  onChangeKGG(e) {
    this.setState({
      KGG: e.target.value
    });
  }
  onChangeQTY(e) {
    this.setState({
      QTY: e.target.value
    })  
  }
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      KGG: this.state.KGG,
      QTY: this.state.QTY
      
    };
    axios.post('http://localhost:4000/business/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      KGG: '',
      QTY: ''
      
    })
  }
 

  render() {
    const {obj}= this.props.location.state
    console.log(obj)
    return (
      <div>
      <div id="sidebar-left">
      <h6 className="text-center"> categories</h6>
      <hr/>
      <div className="text-center">
     
      <p><a  href="#">fruits& vegitabled</a></p>
        <p><a  href="#">fresh fruits</a></p>
        <p><a  href="#">beverages</a></p>
        <p> <a  href="#">snacks</a></p>
       <p> <a  href="#">bakery</a></p>
       
      </div>
      
     </div>
      <div >
      <div className="row  px-3 " style={{backgroundColor:"whitesmoke"}}>
    <div class="col-3 py-3 px-1">
    <div className="card">
        <div className="img-container">
        <p style={{textAlign:"right",color:"red"}}>GET25%OFF</p>
        <hr/>
        <Link to={{
        pathname:"/ProductDetails",
        state:{
          obj:this.props.image
        }
        }}>
        <div className="text-center">
      <img src={obj.image} alt="product" style={{width: "150px", height: "150px", pointerEvents: "none"}}></img>
      </div>
      </Link>
        <div className="text-sm-center">
       <h5 >{obj.pname}</h5>
        
        </div>
        <hr/>
        <form  onSubmit={this.onSubmit}>
        <div class="form-group  ">
    <div class="input-group input-group-sm justify-content-center">
    
    <input type="text" className="form-control col-5"
     value={this.state.KGG}
    onChange={this.onChangeKGG} />
      <select class="form-control col-5" name="">
        <option >KiloGram.</option>
        <option >Gram.</option>
      </select>
    </div>
  </div>
   <span  className="text-center"><p>MRP:<del>Rs 15</del><ins>20Rs</ins></p></span>
     <div >
       <div class="input-group input-group-sm justify-content-center" >
    <div class="input-group-prepend ">
      <span class="input-group-text ">QTY</span>
    </div>
    <input type="text" class="form-control col-4" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
       value={this.state.QTY}
    onChange={this.onChangeQTY}
    />
    </div>
    
  </div>
 
  <br style ={{lineHeight:"1px"}}/>
  <div className="text-center">
    <button className="btn btn-warning btn-sm col-5">ADD<i className="fas fa-shopping-cart"></i></button>
    </div>
    </form>
    <br style ={{lineHeight:"1px"}}/>
  </div>
  </div>
    </div>
    <div class="col-3 py-3 px-1">
    <div className="card">
        <div className="img-container">
        <p style={{textAlign:"right",color:"red"}}>GET25%OFF</p>
        <hr/>
        <Link to={{
        pathname:"/ProductDetails",
        state:{
          obj:this.props.image
        }
        }}>
        <div className="text-center">
      <img src={obj.image} alt="product" style={{width: "150px", height: "150px", pointerEvents: "none"}}></img>
      </div>
      </Link>
        <div className="text-sm-center">
       <h5 >{obj.pname}</h5>
        
        </div>
        <hr/>
  
  
        <div class="form-group  ">
    <div class="input-group input-group-sm justify-content-center">
    <input type="text" className="form-control col-5" />
      <select class="form-control col-5" name="">
        <option >KiloGram.</option>
        <option >Gram.</option>
      </select>
    </div>
  </div>
   <span  className="text-center"><p>MRP:<del>Rs 15</del><ins>20Rs</ins></p></span>
     <div >
       <div class="input-group input-group-sm justify-content-center" >
    <div class="input-group-prepend ">
      <span class="input-group-text ">QTY</span>
    </div>
    <input type="text" class="form-control col-4" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
    </div>
    
  </div>
  <br style ={{lineHeight:"1px"}}/>
  <div className="text-center">
    <button className="btn btn-warning btn-sm col-5">ADD<i className="fas fa-shopping-cart"></i></button>
    </div>
    <br style ={{lineHeight:"1px"}}/>
  </div>
  </div>
    </div>
    <div class="col-3 py-3 px-1">
    <div className="card">
        <div className="img-container">
        <p style={{textAlign:"right",color:"red"}}>GET25%OFF</p>
        <hr/>
        <Link to={{
        pathname:"/ProductDetails",
        state:{
          obj:this.props.image
        }
        }}>
        <div className="text-center">
      <img src={obj.image} alt="product" style={{width: "150px", height: "150px", pointerEvents: "none"}}></img>
      </div>
      </Link>
        <div className="text-sm-center">
       <h5 >{obj.pname}</h5>
        
        </div>
        <hr/>
  
  
        <div class="form-group  ">
    <div class="input-group input-group-sm justify-content-center">
    <input type="text" className="form-control col-5" />
      <select class="form-control col-5" name="">
        <option >KiloGram.</option>
        <option >Gram.</option>
      </select>
    </div>
  </div>
   <span  className="text-center"><p>MRP:<del>Rs 15</del><ins>20Rs</ins></p></span>
     <div >
       <div class="input-group input-group-sm justify-content-center" >
    <div class="input-group-prepend ">
      <span class="input-group-text ">QTY</span>
    </div>
    <input type="text" class="form-control col-4" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
    </div>
    
  </div>
  <br style ={{lineHeight:"1px"}}/>
  <div className="text-center">
    <button className="btn btn-warning btn-sm col-5">ADD<i className="fas fa-shopping-cart"></i></button>
    </div>
    <br style ={{lineHeight:"1px"}}/>
  </div>
  </div>
    </div>
    <div class="col-3 py-3 px-1">
    <div className="card">
        <div className="img-container">
        <p style={{textAlign:"right",color:"red"}}>GET25%OFF</p>
        <hr/>
        <Link to={{
        pathname:"/ProductDetails",
        state:{
          obj:this.props.image
        }
        }}>
        <div className="text-center">
      <img src={obj.image} alt="product" style={{width: "150px", height: "150px", pointerEvents: "none"}}></img>
      </div>
      </Link>
        <div className="text-sm-center">
       <h5 >{obj.pname}</h5>
        
        </div>
        <hr/>
  
  
        <div class="form-group  ">
    <div class="input-group input-group-sm justify-content-center">
    <input type="text" className="form-control col-5" />
      <select class="form-control col-5" name="">
        <option >KiloGram.</option>
        <option >Gram.</option>
      </select>
    </div>
  </div>
   <span  className="text-center"><p>MRP:<del>Rs 15</del><ins>20Rs</ins></p></span>
     <div >
       <div class="input-group input-group-sm justify-content-center" >
    <div class="input-group-prepend ">
      <span class="input-group-text ">QTY</span>
    </div>
    <input type="text" class="form-control col-4" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
    </div>
    
  </div>
  <br style ={{lineHeight:"1px"}}/>
  <div className="text-center">
    <button className="btn btn-warning btn-sm col-5">ADD<i className="fas fa-shopping-cart"></i></button>
    </div>
    <br style ={{lineHeight:"1px"}}/>
  </div>
  </div>
    </div>
  
    <div class="col-3 py-3 px-1">
    <div className="card">
        <div className="img-container">
        <p style={{textAlign:"right",color:"red"}}>GET25%OFF</p>
        <hr/>
        <Link to={{
        pathname:"/ProductDetails",
        state:{
          obj:this.props.image
        }
        }}>
        <div className="text-center">
      <img src={obj.image} alt="product" style={{width: "150px", height: "150px", pointerEvents: "none"}}></img>
      </div>
      </Link>
        <div className="text-sm-center">
       <h5 >{obj.pname}</h5>
        
        </div>
        <hr/>
  
  
        <div class="form-group  ">
    <div class="input-group input-group-sm justify-content-center">
    <input type="text" className="form-control col-5" />
      <select class="form-control col-5" name="">
        <option >KiloGram.</option>
        <option >Gram.</option>
      </select>
    </div>
  </div>
   <span  className="text-center"><p>MRP:<del>Rs 15</del><ins>20Rs</ins></p></span>
     <div >
       <div class="input-group input-group-sm justify-content-center" >
    <div class="input-group-prepend ">
      <span class="input-group-text ">QTY</span>
    </div>
    <input type="text" class="form-control col-4" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
    </div>
    
  </div>
  <br style ={{lineHeight:"1px"}}/>
  <div className="text-center">
    <button className="btn btn-warning btn-sm col-5">ADD<i className="fas fa-shopping-cart"></i></button>
    </div>
    <br style ={{lineHeight:"1px"}}/>
  </div>
  </div>
    </div>
  
  
  
  
  
  
  
  
  
  
  
  
    <div class="col-3">col</div>
    <div class="col-3">col</div>
    <div class="col-3">col</div>
    <div class="col-3">col</div>
  </div>
    </div>
  
    </div>
     
    );
  }
}

export default TableRow;
