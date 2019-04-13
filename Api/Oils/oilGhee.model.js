const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Oils = new Schema({
  
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
    collection: 'Oils'
});

module.exports = mongoose.model('Oils', Oils);
