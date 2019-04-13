import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import  PropTypes from 'prop-types'
//import ProductDetails from './ProductDetail';
import FreshVegProductItem from './FreshvegproductItem';
import Sidebar from '../../sidebar/Sidebar'
import { bindActionCreators } from 'redux'

class FreshVegProductList extends Component {

    
render() {
    
    const {items}= this.props;
return (
    <div>
    <Sidebar/>
<div className="container" style={{backgroundColor:"whitesmoke"}}>
    <div className="row" >
    { items.map((post)=>(
    <FreshVegProductItem key={post._id}   product={post} />
    ))}
        
    </div>
</div>
</div>
)
}

}


FreshVegProductList.propTypes={
items: PropTypes.array
}

const mapStateToProps=state=>({
items:state.fetchPost.items
})


export default connect(mapStateToProps,  null)(FreshVegProductList)
