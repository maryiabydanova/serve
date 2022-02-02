import Sequelize from "sequelize";
import { loadModels, makeModelAssociations } from "./models/index.js";
import CONFIG from "../config/index.js";
import seedData from "./seeds/index.js";

const sequelize = new Sequelize({ ...CONFIG.DB });

const DB = {};
DB.sequelize = sequelize;

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully.");
  } catch (error) {
    throw error;
  }
};

const initializeDatabase = () => {
  try {
    loadModels(DB, sequelize);
    makeModelAssociations(DB);
    console.log("Database modals loaded successfully.");
  } catch (error) {
    throw error;
  }
};

const dropAndReCreateModels = async () => {
  await DB.sequelize.sync({ force: true });
  await Promise.all(seedData(DB));
};

export { DB, connectToDatabase, initializeDatabase, dropAndReCreateModels };
