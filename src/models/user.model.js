const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    require: true,
    maxlength: 255,
    trim: true
  },
  lastname: {
    type: String,
    require: true,
    maxlength: 255,
    trim: true
  },
  email: {
    type: String,
    require: true,
    maxlength: 255,
    trim: true
  },
  password: {
    type: String,
    require: true,
    maxlength: 255,
  },
  dob: {
    type: String,
  },
  role:  {
    type: String,
    enum: ['admin', 'user'],
    default: "user"
  }
})

userSchema.methods.generateAuthToken = function() {
  return jwt.sign({id: this._id, role: this.role}, process.env.secret_key, {expiresIn: process.env.token_life})
}

const User = mongoose.model("User", userSchema);

exports.userSchema = userSchema;
exports.User = User;

