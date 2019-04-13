const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Cake = new Schema({
  
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
    collection: 'Cake'
});

module.exports = mongoose.model('Cake', Cake);
