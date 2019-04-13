const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Flour = new Schema({
  
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
    collection: 'Flour'
});

module.exports = mongoose.model('Flour', Flour);
