"use strict";
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    "product",
    {
      productName: DataTypes.STRING,
      imageUrl: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      details: DataTypes.TEXT,
      userId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  product.associate = function (models) {
    product.belongsTo(models.user);
  };
  return product;
};
