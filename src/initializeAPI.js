import AJV from "./middlewares/validation/ajv/ajv.js";
import loadEndpointValidationSchemas from "./middlewares/validation/ajv/loadSchemas.js";
import { connectToDatabase, initializeDatabase, dropAndReCreateModels } from "./db/index.js";
import { makeSuccessResponseGloballyAccessible } from "./responses/success/successReponse.js";
import validateEnvVariables from "./utils/validateEnvVariables.js";

const initializeAPI = async () => {
  try {
    validateEnvVariables();
    await connectToDatabase();
    await initializeDatabase();
    await dropAndReCreateModels();
    loadEndpointValidationSchemas(AJV);
    makeSuccessResponseGloballyAccessible();
  } catch (error) {
    throw error;
  }
};

export default initializeAPI;
