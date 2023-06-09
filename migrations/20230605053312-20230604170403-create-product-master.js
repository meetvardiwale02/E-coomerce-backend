"use strict";

const { QueryError } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    //await queryInterface.removeColumn("product_masters", "category_id");
    await queryInterface.addColumn("product_masters", "isActive", {
      type: Sequelize.BOOLEAN,
      defaultValue: 1,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("product_masters", "isActive");
  },
};
