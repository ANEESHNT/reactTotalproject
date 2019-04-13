const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Health = new Schema({
  
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
    collection: 'Health'
});

module.exports = mongoose.model('Health', Health);
