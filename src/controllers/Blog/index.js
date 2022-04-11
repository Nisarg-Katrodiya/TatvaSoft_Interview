const response = require('../../helper/response');
const blogPost = require('./blog.post');
const blogPut = require('./blog.put');
const blogGet = require('./blog.get');
const blogdelete = require('./blog.delete');

exports.create = (req, res) => {
  blogPost.create(req)
  .then((result) => {
    response(res, result)
  }).catch((err) => {
    response(res, err)
  });
}

exports.update = (req, res) => {
  blogPut.update(req)
  .then((result) => {
    response(res, result)
  }).catch((err) => {
    response(res, err)
  });
}

exports.getAll = (req, res) => {
  blogGet.getAll(req)
  .then((result) => {
    response(res, result)
  }).catch((err) => {
    response(res, err)
  });
}

exports.getOne = (req, res) => {
  blogGet.getById(req)
  .then((result) => {
    response(res, result)
  }).catch((err) => {
    response(res, err)
  });
}

exports.delete = (req, res) => {
  blogdelete.deleteById(req)
  .then((result) => {
    response(res, result)
  }).catch((err) => {
    response(res, err)
  });
}