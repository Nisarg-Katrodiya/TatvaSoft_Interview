const { Blog } = require('../../models/blog.model');
const message = require('../../utils/messages')
const responseCode = require('../../utils/statusCodes');

exports.create = async(req) => {
  try {

    let {title, description, category, author, status} = req.body;

    const findBlog = await Blog.findOne({title});
    if(findBlog) {
      return message.associated(
        responseCode.conflict,
      )
    }

    let blogData = {
      title, 
      description, 
      publised_date: new Date().getTime(),
      modify_date: new Date().getTime(),
      category, 
      author, 
      status,
      user: req.user.id,
    }
    
    let blog = await Blog.create(blogData);
    if(blog) {
      return message.successRes(
        responseCode.success,
        blog
      )
    }

    
  } catch (error) {
    console.log("🚀 ~ file: blog.post.js ~ line 46 ~ exports.create=async ~ error", error)
    return message.serverEror(responseCode.internalServerError);
  }
}