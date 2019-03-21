import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import ProductDetails from './ProductDetails';
import Home from '../Home';


export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {business: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/business')
        .then(response => {
          this.setState({ business: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    // tabRow(){
    //   return this.state.business.map(function(object, i){
    //       return<TableRow obj={object} key={i}/>
    //   }); 
    // }
    HomE(){
      return this.state.business.map(function(object,i){
        return<Home obj={object} key={i}/>
      });
    }

    render() {
      return (
        <div>
              {/* { this.tabRow() }  */}
              {this.HomE()}
        </div>
      );
    }
  }
