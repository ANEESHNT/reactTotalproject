import React, { Component } from 'react';
import './Store.css'




class Store extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-3">
        <div className="card">
        <div className="img-container p-0">
        <img src="https://www.bigbasket.com/media/customPage/355c27b8-a44f-4900-a390-8e82c69b8021/318f4b8e-77c6-43bb-8f50-ded9477a1297/6df527a7-06f3-4379-b274-6ecd90cecd18/1902021-atta-rice_t1_360.jpg" alt="items" className="card-img-top"/>
        </div>
        </div>
        </div>

        <div className="col-sm-3">
        <div className="card">
        <div className="img-container p-0">
        <img src="https://www.bigbasket.com/media/customPage/355c27b8-a44f-4900-a390-8e82c69b8021/318f4b8e-77c6-43bb-8f50-ded9477a1297/6df527a7-06f3-4379-b274-6ecd90cecd18/1902019-spices_t1_360.jpg" alt="items" className="card-img-top"/>
        </div>
        </div>
        </div>

        <div className="col-sm-3">
        <div className="card">
        <div className="img-container p-0">
        <img src="https://www.bigbasket.com/media/customPage/355c27b8-a44f-4900-a390-8e82c69b8021/318f4b8e-77c6-43bb-8f50-ded9477a1297/6df527a7-06f3-4379-b274-6ecd90cecd18/1902022-oils-and-ghee_t1_360.jpg" alt="items" className="card-img-top"/>
        </div>
        </div>
        </div>

      </div>  
  
      
    );
  }
}

export default Store;
