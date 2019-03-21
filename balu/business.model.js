const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  pname: {
    type: String
  },
  bname: {
    type: String
  },
  image: {
    type: String
  }
},{
    collection: 'newdata'
});

module.exports = mongoose.model('Business', Business);
