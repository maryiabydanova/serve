import http from "http";
import app from "./app.js";
import CONFIG from "./config/index.js";

const server = http.createServer(app);

const initializeHttpService = async () => {
  server.listen(CONFIG.APP.PORT);
};

const onListeningHandler = () => {
  console.log(`API is running at port ${CONFIG.APP.PORT} in '${CONFIG.APP.NODE_ENV}' environment.`);
};

const onErrorHandler = (error) => {
  console.log(`HTTP Error: ${error}`);
  process.exit(1);
};

server.on("listening", onListeningHandler);
server.on("error", onErrorHandler);

export default initializeHttpService;
