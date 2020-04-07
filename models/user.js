"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      isOwner: DataTypes.BOOLEAN
    },
    {}
  );
  user.associate = function (models) {
    user.hasMany(models.product);
    user.belongsToMany(models.product, {
      through: "orders",
      foreignKey: "userId",
    });
  };
  return user;
};
