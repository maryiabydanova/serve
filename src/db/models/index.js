import Sequelize from "sequelize";
import modelMap from "./modelMap.js";

const loadModels = (DB, sequelize) => {
  for (let [key, Model] of Object.entries(modelMap)) {
    const model = Model(sequelize, Sequelize.DataTypes);
    DB[model.name] = model;
  }
};

const makeModelAssociations = (DB) => {
  Object.keys(DB).forEach((modelName) => {
    if (DB[modelName].associate) {
      DB[modelName].associate(DB);
    }
  });
};

export { loadModels, makeModelAssociations };
