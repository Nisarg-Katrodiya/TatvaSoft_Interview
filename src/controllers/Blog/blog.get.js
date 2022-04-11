const { query } = require('express');
const { Blog } = require('../../models/blog.model');
const message = require('../../utils/messages')
const responseCode = require('../../utils/statusCodes');

exports.getAll = async(req) => {
  try {

    let {pageNumber = 1, pageSize = 10, title, author, category, blog, date} = req.query;
    let query = {}, meta = {};
    
    if(title) query.title = title;
    if(author) query.author = author;
    if(category) query.category = category;
    if(blog) query.blog = blog;

    let blogListCount = await Blog.find();
    meta.totalData = blogListCount.length;

    let blogList = await Blog
      .find(query)
      .sort({publised_date: -1})
      .skip((parseInt(pageNumber) - 1) * parseInt(pageSize))
      .limit(parseInt(pageSize))
    if (blogList) {
      return message.successRes(
        responseCode.success,
        blogList,
        meta
      )
    } 
  } catch (error) {
    console.log("🚀 ~ file: blog.get.js ~ line 16 ~ exports.getAll=async ~ error", error)
    return message.serverEror(responseCode.internalServerError);
  }
}

exports.getById = async(req) => {
  try {

    let blog = await Blog.findById(req.params.id);
    if(blog) {
      return message.successRes(
        responseCode.success,
        blog
      );
    } else {
      return message.notFound(
        responseCode.notFound,
      );
    }
    
  } catch (error) {
    console.log("🚀 ~ file: blog.get.js ~ line 32 ~ exports.getById=async ~ error", error)
    return message.serverEror(responseCode.internalServerError);
  }
}