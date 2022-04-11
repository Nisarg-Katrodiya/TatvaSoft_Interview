const { User } = require('../../models/user.model');
const message = require('../../utils/messages')
const responseCode = require('../../utils/statusCodes');
const bcrypt = require('bcrypt');


exports.login = async(req) => {
  try {

    let {email, password} = req.body;

    let findUser = await User.findOne({email});
    if(!findUser) {
      return message.loginFaild(
        responseCode.notFound,
      )
    }

    let validate = await bcrypt.compare(password, findUser.password);
    if(!validate) {
      return message.loginFaild(
        responseCode.notFound,
      )
    }

    let token = findUser.generateAuthToken();
    findUser = findUser.toJSON();

    if(findUser) {
      return message.successRes(
        responseCode.success,
        {...findUser, token}
      )
    }
    
  } catch (error) {
    console.log("🚀 ~ file: user.post.js ~ line 46 ~ exports.create=async ~ error", error)
    return message.serverEror(responseCode.internalServerError);
  }
}