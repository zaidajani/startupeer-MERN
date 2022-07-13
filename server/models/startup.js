const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brief: {
    type: String,
    required: true,
  },
  explaination: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('businesses', userSchema);