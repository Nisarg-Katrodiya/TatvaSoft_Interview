const { User } = require('../../models/user.model');
const message = require('../../utils/messages')
const responseCode = require('../../utils/statusCodes');
const bcrypt = require('bcrypt');


exports.update = async(req) => {
  try {

    let {lastname, firstname, email, password, dob, role} = req.body;

    if(req.user.id != req.params.id && req.user.role !== 'admin') {
      return message.notAuthenticate(
        responseCode.unAuthoriseRequest,
      )
    }

    let findUser = await User.findById(req.params.id);
    if(!findUser) {
      return message.notFound(
        responseCode.notFound,
      )
    }
    if(lastname) findUser.lastname = lastname;
    if(firstname) findUser.firstname = firstname;
    if(email) findUser.email = email;
    if(dob) findUser.dob = new Date(dob).getTime();
    if(role) findUser.role = role;
    
    if(password) {
      const salt = await bcrypt.genSalt(10);
      findUser.password = await bcrypt.hash(findUser.password, salt);
    }
    
    findUser = findUser.toJSON();
    let user = await User.findByIdAndUpdate(findUser._id, findUser, {new: true})
    if(user) {
      return message.successRes(
        responseCode.success,
        user
      )
    }

  } catch (error) {
    console.log("🚀 ~ file: user.put.js ~ line 40 ~ exports.update=async ~ error", error)
    return message.serverEror(responseCode.internalServerError);
  }
}