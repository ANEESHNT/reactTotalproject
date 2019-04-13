import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import  PropTypes from 'prop-types'
//import ProductDetails from './ProductDetail';
import DetergentProductItem from './DetergentproductItem';
import DetergentProductDetails from './DetergentProductDetail';
import Sidebar from '../../sidebar/Sidebar'
import { bindActionCreators } from 'redux'

class DetergentProductList extends Component {

    
render() {
    
    const {items}= this.props;
return (
    <div>
    <Sidebar/>
<div className="container" style={{backgroundColor:"whitesmoke"}}>
    <div className="row" >
    { items.map((post)=>(
    <DetergentProductItem key={post._id}   product={post} />
    ))}
        
    </div>
</div>
</div>
)
}

}


DetergentProductList.propTypes={
items: PropTypes.array
}

const mapStateToProps=state=>({
items:state.fetchPost.items
})


export default connect(mapStateToProps,  null)(DetergentProductList)
