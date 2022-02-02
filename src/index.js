import "./loadEnv.js";
import initializeHttpService from "./http.js";
import initializeAPI from "./initializeAPI.js";

const bootstrapAPI = async () => {
  try {
    await initializeAPI();
    initializeHttpService();
  } catch (error) {
    console.log(`API Bootstrap Error: ${error}`);
    process.exit(1);
  }
};

bootstrapAPI();
