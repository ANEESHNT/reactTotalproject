const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Spices = new Schema({
  
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
    collection: 'Spices'
});

module.exports = mongoose.model('Spices', Spices);
