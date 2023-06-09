"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("category_masters", [
      {
        category_name: "shoes",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "clothings",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "electronics",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "cosmetics",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("category_masters", []);
  },
};
