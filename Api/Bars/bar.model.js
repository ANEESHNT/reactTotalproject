const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Bar = new Schema({
  
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
    collection: 'Bar'
});

module.exports = mongoose.model('Bar', Bar);
