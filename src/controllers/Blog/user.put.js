const { User } = require('../../models/user.model');
const message = require('../../utils/messages')
const responseCode = require('../../utils/statusCodes');
const bcrypt = require('bcrypt');


exports.update = async(req) => {
  try {

    let {lastname, firstname, email, password, dob, role} = req.body;

    const findUser = User.findOne({email});
    if(!findUser) {
      return message.notFound(
        responseCode.notFound,
      )
    }
    findUser = findUser.toJSON();
    if(lastname) findUser.lastname = lastname;
    if(firstname) findUser.firstname = firstname;
    if(email) findUser.email = email;
    if(dob) findUser.dob = new Date(dob).getTime();
    if(role) findUser.role = role;
    
    if(password) {
      const salt = await bcrypt.genSalt(10);
      findUser.password = await bcrypt.hash(findUser.password, salt);
    }

    let user = User.findByIdAndUpdate(findUser._id, {$set: { userData }}, {new: true})
    if(user) {
      return message.successRes(
        responseCode.success,
        user
      )
    }

    
  } catch (error) {
    return message.serverEror(responseCode.internalServerError);
  }
}