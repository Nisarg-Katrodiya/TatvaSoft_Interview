const message = module.exports = {};

message.successRes = (statusCode, data, meta) => ({
  statusCode,
  data: {
    status: "Success",
    message: "Request is successfully executed",
    data,
    meta: {}
  }
})

message.serverEror = (statusCode, data) => ({
  statusCode,
  data: {
    status: "Fail",
    message: "Internal Server Error",
    data: {}
  }
})

message.notFound = (statusCode, data) => ({
  statusCode,
  data: {
    status: "Not found",
    message: "Data can not found with that Id",
    data: {}
  }
})

message.associated = (statusCode, data) => ({
  statusCode,
  data: {
    status: "conflict",
    message: "Data already associated with other account",
    data: {}
  }
})

message.notAuthenticate = (statusCode, data) => ({
  statusCode,
  data: {
    status: "conflict",
    message: "Can not update data",
    data: {}
  }
})

message.badRequest = (statusCode, data) => ({
  statusCode,
  data: {
    status: "bad_request",
    message: "Can not perform operation due to bag syntax",
    data: {}
  }
})

message.loginFaild = (statusCode, data) => ({
  statusCode,
  data: {
    status: "bad_request",
    message: "User email or passward are invalid",
    data: {}
  }
})

message.loginSuccess = (statusCode, data) => ({
  statusCode,
  data: {
    status: "success",
    message: "Login successfull",
    data: {}
  }
})

message.deleteSuccess = (statusCode, data, meta) => ({
  statusCode,
  data: {
    status: "Success",
    message: "Data successfully deleted",
  }
})