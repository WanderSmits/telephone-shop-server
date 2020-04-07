"use strict";
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    "product",
    {
      productName: DataTypes.STRING,
      imageUrl: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      userId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  product.associate = function (models) {
    product.belongsTo(models.user);
    product.hasOne(models.detail);
  };
  return product;
};
