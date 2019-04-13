const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Liquid = new Schema({
  
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
    collection: 'Liquid'
});

module.exports = mongoose.model('Liquid', Liquid);
