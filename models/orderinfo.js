'use strict';
module.exports = (sequelize, DataTypes) => {
  const orderInfo = sequelize.define('orderInfo', {
    trackingNo: DataTypes.INTEGER,
    color: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.STRING, allowNull: false },
    shippingAddress: { type: DataTypes.TEXT, allowNull: false },
    expressDelivery: DataTypes.BOOLEAN
  }, {});
  orderInfo.associate = function(models) {
    // associations can be defined here
  };
  return orderInfo;
};