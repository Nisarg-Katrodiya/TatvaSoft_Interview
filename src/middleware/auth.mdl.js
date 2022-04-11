const jwt = require('jsonwebtoken');
const {User} = require('../models/user.model');

exports.auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization');
    if(!token) return res.status(401).send("Access denied!!");
    const decode = jwt.verify(token, process.env.secret_key);
    req.user = decode;
    
    const checkUser = User.findById(req.user.id);
    if(!checkUser) return res.status(404).send('User not found with this token');

    next();
  }
  catch(err) {
    return res.status(400).send(err);
  }

}