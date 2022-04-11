const { User } = require('../../models/user.model');
const message = require('../../utils/messages')
const responseCode = require('../../utils/statusCodes');

exports.getAll = async() => {
  try {

    let userList = await User.find()
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

    let user = await User.findById(req.params.id);
    if(user) {
      return message.successRes(
        responseCode.success,
        user
      )
    }
    
  } catch (error) {
    console.log("🚀 ~ file: user.get.js ~ line 32 ~ exports.getById=async ~ error", error)
    return message.serverEror(responseCode.internalServerError);
  }
}