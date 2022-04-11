const { Blog } = require('../../models/blog.model');
const message = require('../../utils/messages')
const responseCode = require('../../utils/statusCodes');

exports.deleteById = async(req) => {
  try {

    let user = await Blog.findByIdAndRemove(req.params.id);
    if(user) {
      return message.deleteSuccess(
        responseCode.success,
        user
      );
    } else {
      return message.notFound(
        responseCode.notFound,
      );
    }
    
  } catch (error) {
    return message.serverEror(responseCode.internalServerError);
  }
}