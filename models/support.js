'use strict';
module.exports = (sequelize, DataTypes) => {
  const support = sequelize.define('support', {
    reason: { type: DataTypes.STRING, allowNull: false },
    subject: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    link: DataTypes.STRING,
    resolved: DataTypes.BOOLEAN
  }, {});
  support.associate = function(models) {
    // associations can be defined here
  };
  return support;
};