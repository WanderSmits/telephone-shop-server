"use strict";
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      userId: DataTypes.INTEGER,
      productId: DataTypes.ARRAY(DataTypes.DECIMAL),
    },
    {}
  );
  order.associate = function (models) {
    order.belongsTo(models.user);
    order.belongsTo(models.product);
  };
  return order;
};
