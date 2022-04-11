const { Blog } = require('../../models/blog.model');
const message = require('../../utils/messages')
const responseCode = require('../../utils/statusCodes');
const bcrypt = require('bcrypt');


exports.update = async(req) => {
  try {

    let {title, description, category, author, status} = req.body;
    let findBlog = await Blog.findById(req.params.id);
    if(!findBlog) {
      return message.notFound(
        responseCode.notFound,
      )
    }
    findBlog = findBlog.toJSON();

    if(title) findBlog.title = title;
    if(description) findBlog.description = description;
    if(category) findBlog.category = category;
    if(author) findBlog.author = author;
    if(status) findBlog.status = status;
    findBlog.modify_date = new Date().getTime();

    let blog = await Blog.findByIdAndUpdate(findBlog._id, findBlog, {new: true})
    if(blog) {
      return message.successRes(
        responseCode.success,
        blog
      )
    }
  } catch (error) {
    console.log("🚀 ~ file: blog.put.js ~ line 40 ~ exports.update=async ~ error", error)
    return message.serverEror(responseCode.internalServerError);
  }
}