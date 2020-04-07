"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "orders",
      [
        {
          userId: 1,
          productId: 2,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          productId: 2,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          productId: 3,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("orders", null, {});
  },
};
