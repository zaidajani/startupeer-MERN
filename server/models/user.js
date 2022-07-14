const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  makes: {
    type: Array,
  }
});

userSchema.methods.generateAuthToken = function() {
  const token = jsonwebtoken.sign({ _id: this._id }, 'mysecret');
  return token;
}

module.exports = mongoose.model('User', userSchema);