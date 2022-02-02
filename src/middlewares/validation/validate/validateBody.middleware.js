import ajv from "../ajv/ajv.js";
import parseErrors from "./parseErrors.js";
import Exceptions from "../../../responses/exceptions/index.js";
import Messages from "../../../responses/messages/index.js";

export default (schemaName) => {
  return (req, res, next) => {
    const validate = ajv.getSchema(schemaName);
    const isValid = validate(req.body);
    if (!isValid) {
      return next(Exceptions.badRequestException(Messages.VALIDATION_FAILED, parseErrors(validate.errors)));
    }
    return next();
  };
};
