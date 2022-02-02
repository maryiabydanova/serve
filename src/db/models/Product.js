export default (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER(),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "product",
      schema: "public",
      timestamps: true,
    }
  );

  return Product;
};
