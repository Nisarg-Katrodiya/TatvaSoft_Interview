const { query } = require('express');
const { Blog } = require('../../models/blog.model');
const message = require('../../utils/messages')
const responseCode = require('../../utils/statusCodes');

exports.getAll = async(req) => {
  try {

    let {pageNumber = 1, pageSize = 10, title, author, category, user, date} = req.query;
    let query = {};
    
    if(title) query.title = title;
    if(author) query.author = author;
    if(category) query.category = category;
    if(user) query.user = user;


    let userList = await Blog
      .find(query)
      .sort({publised_date: -1})
      .skip((parseInt(pageNumber) - 1) * parseInt(pageSize))
      .limit(parseInt(pageSize))
    if (userList) {
      return message.successRes(
        responseCode.success,
        userList
      )
    } 
  } catch (error) {
    console.log("🚀 ~ file: user.get.js ~ line 16 ~ exports.getAll=async ~ error", error)
    return message.serverEror(responseCode.internalServerError);
  }
}

exports.getById = async(req) => {
  try {

    let user = await Blog.findById(req.params.id);
    if(user) {
      return message.successRes(
        responseCode.success,
        user
      );
    } else {
      return message.notFound(
        responseCode.notFound,
      );
    }
    
  } catch (error) {
    console.log("🚀 ~ file: user.get.js ~ line 32 ~ exports.getById=async ~ error", error)
    return message.serverEror(responseCode.internalServerError);
  }
}