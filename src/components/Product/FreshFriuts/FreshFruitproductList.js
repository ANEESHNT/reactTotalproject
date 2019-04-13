import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import  PropTypes from 'prop-types'
//import ProductDetails from './ProductDetail';
import FreshFruitProductItem from './FreshFruitproductItem';
import FreshFruitProductDetails from './FreshFruitProductDetail';
import Sidebar from '../../sidebar/Sidebar'
import { bindActionCreators } from 'redux'

class FreshFruitProductList extends Component {

    
render() {
    
    const {items}= this.props;
return (
    <div>
    <Sidebar/>
<div className="container" style={{backgroundColor:"whitesmoke"}}>
    <div className="row" >
    { items.map((post)=>(
    <FreshFruitProductItem key={post._id}   product={post} />
    ))}
        
    </div>
</div>
</div>
)
}

}


FreshFruitProductList.propTypes={
items: PropTypes.array
}

const mapStateToProps=state=>({
items:state.fetchPost.items
})


export default connect(mapStateToProps,  null)(FreshFruitProductList)
