"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "details",
      [
        {
          operatingSystem: "iOs 12",
          batteryLife: "Up to 21h",
          screenSize: "5.8 inch",
          weightInGrams: 174,
          virtualAssistant: "Siri",
          guaranteeInYears: 2,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          operatingSystem: "Android 9",
          batteryLife: "Up to 19h",
          screenSize: "6.1 inch",
          weightInGrams: 157,
          virtualAssistant: "Bixby",
          guaranteeInYears: 2,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          operatingSystem: "Ancient wisdom",
          batteryLife: "Never-ending",
          screenSize: "Just enough",
          weightInGrams: 200,
          virtualAssistant: "The Hulk",
          guaranteeInYears: 999,
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("details", null, {});
  },
};
