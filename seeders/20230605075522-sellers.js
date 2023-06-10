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
    await queryInterface.bulkInsert("seller_masters", [
      {
        seller_name: "Ajax Patel",
        email: "ajaxxx@gmail.com",
        brand_name: "Puma",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        seller_name: "Nikhil arora",
        email: "nikhil@gmail.com",
        brand_name: "Oneplus",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        seller_name: "Rohan Kapoor",
        email: "rohan@gmail.com",
        brand_name: "H&M",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        seller_name: "neha joshi",
        email: "neha@gmail.com",
        brand_name: "Nayka",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        seller_name: "pooja sharma",
        email: "pooja@gmail.com",
        brand_name: "Puma",
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
    await queryInterface.bulkDelete("seller_masters", []);
  },
};
