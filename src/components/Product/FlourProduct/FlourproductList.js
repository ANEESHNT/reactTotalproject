import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import  PropTypes from 'prop-types'
//import ProductDetails from './ProductDetail';
import FlourProductItem from './FlourproductItem';
import FlourProductDetails from './FlourProductDetail';
import Sidebar from '../../sidebar/Sidebar'
import { bindActionCreators } from 'redux'

class ProductList extends Component {

    
render() {
    
    const {items}= this.props;
return (
    <div>
    <Sidebar/>
<div className="container" style={{backgroundColor:"whitesmoke"}}>
    <div className="row" >
    { items.map((post)=>(
    <FlourProductItem key={post._id}   product={post} />
    ))}
        
    </div>
</div>
</div>
)
}

}


ProductList.propTypes={
items: PropTypes.array
}

const mapStateToProps=state=>({
items:state.fetchPost.items
})


export default connect(mapStateToProps,  null)(ProductList)
