import httpStatus from "http-status";
import APIError from "../classes/APIError.js";

export default (message, data) => {
  return new APIError(httpStatus.BAD_REQUEST, message, data);
};
