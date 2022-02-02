export default (sequelize, DataTypes) => {
  const OrderProduct = sequelize.define(
    "OrderProduct",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "order",
          key: "id",
        },
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "product",
          key: "id",
        },
      },
    },
    {
      sequelize,
      tableName: "order_product",
      schema: "public",
      timestamps: true,
    }
  );

  return OrderProduct;
};
