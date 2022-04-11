const response = (response, result) => {
  return response.status(result.statusCode).send(result.data);
}

module.exports = response;