const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Freshener = new Schema({
  
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
    collection: 'Freshener'
});

module.exports = mongoose.model('Freshener', Freshener);
