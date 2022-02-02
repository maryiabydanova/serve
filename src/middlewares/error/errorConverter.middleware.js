import httpStatus from "http-status";
import APIError from "../../responses/classes/APIError.js";

export default (err, req, res, next) => {
  let error = err;
  if (!(error instanceof APIError)) {
    const statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    const message = httpStatus[statusCode];
    const errorMessage = error.message ? error.message : null;
    error = new APIError(statusCode, message, errorMessage, err.stack);
    error.status = "error";
  }
  next(error);
};
