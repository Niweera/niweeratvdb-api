const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  tvid: {
    type: Number,
    required: true
  },
  tvname: {
    type: String,
    required: true
  },
  showtype: {
    type: String,
    required: true
  },
  place: {
    type: [String],
    required: true
  },
  remarks: {
    type: String
  },
  link: {
    type: String,
    required: true
  }
});

module.exports = Item = mongoose.model('item',ItemSchema,'tvdb');
