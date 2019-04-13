const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Salt = new Schema({
  
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
    collection: 'Salt'
});

module.exports = mongoose.model('Salt', Salt);
