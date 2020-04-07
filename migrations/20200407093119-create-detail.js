"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("details", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      operatingSystem: {
        type: Sequelize.STRING,
      },
      batteryLife: {
        type: Sequelize.STRING,
      },
      screenSize: {
        type: Sequelize.STRING,
      },
      weightInGrams: {
        type: Sequelize.INTEGER,
      },
      virtualAssistant: {
        type: Sequelize.STRING,
      },
      guaranteeInYears: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("details");
  },
};
