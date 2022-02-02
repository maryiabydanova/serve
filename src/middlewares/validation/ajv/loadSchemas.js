import SCHEMAS from "../schemas/index.js";
import ORDER_POST_SCHEMA from "../schemas/Order/orderPost.schema.js";

const loadOrderRouteSchemas = (ajv) => {
  ajv.addSchema(ORDER_POST_SCHEMA, SCHEMAS.ORDER.ORDER_POST_SCHEMA);
};

const loadSchemas = (ajv) => {
  try {
    loadOrderRouteSchemas(ajv);
    console.log("Validation schemas loaded successfully.");
  } catch (error) {
    throw error;
  }
};

export default loadSchemas;
