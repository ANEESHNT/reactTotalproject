const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Cookie = new Schema({
  
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
    collection: 'Cookie'
});

module.exports = mongoose.model('Cookie', Cookie);
