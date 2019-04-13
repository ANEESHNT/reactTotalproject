const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let FreshFruits = new Schema({
  
  pname: {
    type: String,
    required:true
    
  },
  price: {
    type: Number,
    
  },

  image:{
    type: String,
    required:true
  }
},{
    collection: 'FreshFruits'
});

module.exports = mongoose.model('FreshFruits', FreshFruits);
