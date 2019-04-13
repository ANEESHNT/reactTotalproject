const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Ice = new Schema({
  
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
    collection: 'Ice'
});

module.exports = mongoose.model('Ice', Ice);
