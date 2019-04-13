const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Energy = new Schema({
  
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
    collection: 'Energy'
});

module.exports = mongoose.model('Energy', Energy);
