const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let OrganicFruVeg = new Schema({
  
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
    collection: 'OrganicFruVeg'
});

module.exports = mongoose.model('OrganicFruVeg', OrganicFruVeg);
