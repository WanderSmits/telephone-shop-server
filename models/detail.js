"use strict";
module.exports = (sequelize, DataTypes) => {
  const detail = sequelize.define(
    "detail",
    {
      operatingSystem: DataTypes.STRING,
      batteryLife: DataTypes.STRING,
      screenSize: DataTypes.STRING,
      weightInGrams: DataTypes.INTEGER,
      virtualAssistant: DataTypes.STRING,
      guaranteeInYears: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    },
    {}
  );
  detail.associate = function (models) {
    detail.belongsTo(models.product);
  };
  return detail;
};
