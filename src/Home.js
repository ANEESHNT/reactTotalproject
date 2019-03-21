import React, { Component } from 'react'
import './Home.css';
import {Link} from 'react-router-dom';
import Slide from './Slide';
export default class Home extends Component {
  render() {
    return(
     <div>
       <Slide/>
    
<div className="row">

      <div className="col-sm-3">
      <div className="card">
      <div className="img-container p-0">
      <Link to={{
        pathname:"/TableRow",
        state:{
          obj:this.props.obj
        }
        }}>
      <img src={this.props.obj.image} alt="items" className="card-img-top"/>
      </Link>
      </div>
      </div>
      
      </div>
    
      <div className="col-sm-3">                                                                                                                                                                                        
      
      <div className="card">
      <div className="img-container p-0">
      <img src="rice.jpg" alt="items" className="card-img-top"/>
      </div>
      </div>
      
       </div>
       
       
       <div className="col-sm-3">
      
      <div className="card">
      <div className="img-container p-0">
      <img src="flour.jpg" alt="items" className="card-img-top"/>
      </div>
      </div>
      
      </div>
      <div className="col-sm-3">
      
      <div className="card">
      <div className="img-container p-0">
      <img src="oil.jpg" alt="items" className="card-img-top"/>
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
      <img src="new.jpg" alt="items" className="card-img-top"/>
      </div>
      </div>
      
      </div>
      
      
      <div className="col-sm-6">
      <div className="card">
      <div className="img-container p-0">
      <img src="healthy.jpg" alt="items" className="card-img-top"/>
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
      <img src="juice.jpg" alt="items" className="card-img-top"/>
      </div>
      </div>
      </div>
      
      <div className="col-sm-2">
      <div className="card">
      <div className="img-container p-0">
      <img src="tea.jpg" alt="items" className="card-img-top"/>
      </div>
      </div>
     </div>
     
      
      
      <div className="col-sm-2">
      <div className="card">
      <div className="img-container p-0">
      <img src="biscuits.jpg" alt="items" className="card-img-top"/>
      </div>
      </div>
      </div>
       
      <div className="col-sm-2">
      <div className="card">
      <div className="img-container p-0">
      <img src="drink.jpg" alt="items" className="card-img-top"/>
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
