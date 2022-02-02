export default (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      address: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "order",
      schema: "public",
      timestamps: true,
    }
  );

  return Order;
};
