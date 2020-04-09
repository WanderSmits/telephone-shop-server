"use strict";
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      orderNumber: DataTypes.INTEGER,
      productColor: DataTypes.STRING,
      expressDelivery: DataTypes.BOOLEAN,
    },
    {}
  );
  order.associate = function (models) {
    order.belongsTo(models.user);
    order.belongsTo(models.product);
  };
  return order;
};
