const { User } = require('../../models/user.model');
const message = require('../../utils/messages')
const responseCode = require('../../utils/statusCodes');
const bcrypt = require('bcrypt');


exports.create = async(req) => {
  try {

    let {lastname, firstname, email, password, dob, role} = req.body;
    console.log("🚀 ~ file: user.post.js ~ line 11 ~ exports.create=async ~ dob", dob)

    const findUser = await User.findOne({email});
    if(findUser) {
      console.log("🚀 ~ file: user.post.js ~ line 14 ~ exports.create=async ~ findUser", findUser)
      return message.associated(
        responseCode.conflict,
      )
    }

    let userData = {
      lastname, 
      firstname, 
      email, 
      password, 
      dob, 
      role
    }
    const salt = await bcrypt.genSalt(10);
    userData.password = await bcrypt.hash(userData.password, salt);
    
    let user = await User.create(userData);
    console.log("🚀 ~ file: user.post.js ~ line 33 ~ exports.create=async ~ user", user)
    let token = user.generateAuthToken();
    
    user = user.toJSON();
    if(user) {
      console.log("🚀 ~ file: user.post.js ~ line 36 ~ exports.create=async ~ user", user)
      return message.successRes(
        responseCode.success,
        {...user, token}
      )
    }

    
  } catch (error) {
    console.log("🚀 ~ file: user.post.js ~ line 46 ~ exports.create=async ~ error", error)
    return message.serverEror(responseCode.internalServerError);
  }
}