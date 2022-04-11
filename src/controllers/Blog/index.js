const response = require('../../helper/response');
const userPost = require('./user.post.js');
const userPut = require('./user.put.js');
const userGet = require('./user.get.js');

exports.create = (req, res) => {
  userPost.create(req)
  .then((result) => {
    response(res, result)
  }).catch((err) => {
    response(res, err)
  });
}

exports.update = (req, res) => {
  userPut.update(req)
  .then((result) => {
    response(res, result)
  }).catch((err) => {
    response(res, err)
  });
}

exports.getAll = (req, res) => {
  userGet.getAll(req)
  .then((result) => {
    response(res, result)
  }).catch((err) => {
    response(res, err)
  });
}

exports.getOne = (req, res) => {
  userGet.getById(req)
  .then((result) => {
    response(res, result)
  }).catch((err) => {
    response(res, err)
  });
}

exports.delete = (req, res) => {
  userPost.create(req)
  .then((result) => {
    response(res, result)
  }).catch((err) => {
    response(res, err)
  });
}