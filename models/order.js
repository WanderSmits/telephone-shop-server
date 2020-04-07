"use strict";
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    },
    {}
  );
  order.associate = function (models) {
    order.belongsTo(models.user);
    order.belongsTo(models.product);
  };
  return order;
};
