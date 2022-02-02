import CONFIG from "../../config/index.js";

export default (err, req, res, next) => {
  const response = {
    status: err.status ? err.status : "fail",
    error: {
      code: err.statusCode,
      message: err.message,
      data: err.data,
    },
  };
  if (err.stack && CONFIG.APP.NODE_ENV === "development") {
    response.error.stack = err.stack;
  }
  res.status(err.statusCode).json(response);
};
