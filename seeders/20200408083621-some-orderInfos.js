'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "orderInfos",
      [
        {
          trackingNo: parseInt(Math.random() * 10000), 
          color: "black",
          price: "199.99",
          shippingAddress: "1695  Lyndon Street, Paoli, PA, Pennsylvania, 19301", 
          expressDelivery: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          orderId: 1
        },
        {
          trackingNo: parseInt(Math.random() * 10000),
          color: "silver",
          price: "199.99",
          shippingAddress: "924  Rogers Street, Williamsburg, OH, Ohio, 45176", 
          expressDelivery: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          orderId: 2
        },
        
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("orderInfos", null, {});
  },
};
