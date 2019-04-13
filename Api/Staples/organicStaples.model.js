const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Staples = new Schema({
  
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
    collection: 'Staples'
});

module.exports = mongoose.model('Staples', Staples);
