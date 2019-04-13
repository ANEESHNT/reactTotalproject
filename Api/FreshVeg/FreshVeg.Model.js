const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let FreshVeg = new Schema({
  
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
    collection: 'FreshVeg'
});

module.exports = mongoose.model('FreshVeg', FreshVeg);
