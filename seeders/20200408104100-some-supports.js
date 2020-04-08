'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "supports",
      [
        {
          reason: "Delivery Issue", 
          subject: "poor service", 
          description: "I am writing today to complain of the poor service I received from your company on June 12, 2016. I was visited by a representative of That Awful Company, Mr. Madman, at my home on that day.", 
          link: "https://www.writeexpress.com/complaint.htm",
          resolved: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          reason: "Neq Request", 
          subject: "I would like to buy more", 
          description: "I am writing today to complain of the poor service I received from your company on June 12, 2016. I was visited by a representative of That Awful Company, Mr. Madman, at my home on that day.", 
          link: "https://www.writeexpress.com/complaint.htm",
          resolved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2
        },
        
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("supports", null, {});
  },
};
