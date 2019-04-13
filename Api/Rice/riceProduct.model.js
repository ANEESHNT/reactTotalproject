const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Rice = new Schema({
  
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
    collection: 'Rice'
});

module.exports = mongoose.model('Rice', Rice);
