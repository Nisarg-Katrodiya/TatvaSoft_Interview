const mongoose = require('mongoose');
const {User} = require('../models/user.model');

const blogSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User
  },
  title: {
    type: String,
    require: true,
    maxlength: 150,
    trim: true
  },
  description: {
    type: String,
    require: true,
    maxlength: 800,
    trim: true
  },
  publised_date: {
    type: Number,
    default: new Date().getTime(),
  },
  modify_date: {
    type: Number,
    default: new Date().getTime(),
  },
  category: {
    type: Object,
    default: {},
  },
  author:  {
    type: String,
  },
  status:  {
    type: String,
    enum: ['publish', 'unpublish'],
    default: "publish"
  },
})

const Blog = mongoose.model("Blog", blogSchema);

exports.blogSchema = blogSchema;
exports.Blog = Blog;