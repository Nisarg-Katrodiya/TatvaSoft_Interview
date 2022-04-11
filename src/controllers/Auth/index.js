const response = require('../../helper/response');
const auth = require('./auth.post');

exports.login = (req, res) => {
  auth.login(req)
  .then((result) => {
    response(res, result)
  }).catch((err) => {
    response(res, err)
  });
}