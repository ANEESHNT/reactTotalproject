const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Juices = new Schema({
  
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
    collection: 'Juices'
});

module.exports = mongoose.model('Juices', Juices);
