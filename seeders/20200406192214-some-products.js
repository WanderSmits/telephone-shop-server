"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "products",
      [
        {
          productName: "iPhone X",
          imageUrl:
            "https://s.s-bol.com/imgbase0/imagebase3/large/FC/4/0/1/8/9200000082608104.jpg",
          price: 1200,
          description:
            "iPhone X features a gorgeous all-glass and stainless steel design with a beautiful 5.8-inch Super Retina display, A11 Bionic chip with neural engine for powerful machine learning, augmented reality and immersive 3D gaming experiences, wireless charging and Face ID, delivering an innovative and secure new way to unlock, authenticate and pay. The TrueDepth camera that enables Face ID brings Portrait mode with Portrait Lighting to the front camera for beautiful selfies with a depth-of-field effect and enables Animoji, which captures and analyzes over 50 different facial muscle movements to bring emoji to life in a fun new way. A redesigned rear camera with dual optical image stabilization includes a new color filter, deeper pixels, an improved Apple-designed image signal processor and features Portrait mode with Portrait Lighting allowing customers to capture stunning photos and videos.",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: "Samsung Galaxy S10",
          imageUrl:
            "https://images.samsung.com/is/image/samsung/my-galaxy-s10-lite-sm-g770fzbixme-frontprismblue-204716200?$PD_GALLERY_L_JPG$",
          price: 1100,
          description:
            "The S10E is as nice as its siblings in many ways. It has the same high-end CPU, a similarly sized screen, and most of the perks of the new phones. On the downside, it has 6 GB of RAM instead of the 8 GB on the version with 128 GB of storage, an HD screen, a dual camera instead of triple cam array, a flat screen with no curved edges, and a standard fingerprint sensor on its power button.",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: "Nokia 3319",
          imageUrl:
            "https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2017%2F02%2Fnokia3310-1.png&signature=a909fe4e584036b2a311ed9bff9dc0b0",
          price: 80,
          description: "unbreakable",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("products", null, {});
  },
};
