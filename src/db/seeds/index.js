import productSeed from "./products.js";

export default (db) => {
  return [productSeed(db)];
};
