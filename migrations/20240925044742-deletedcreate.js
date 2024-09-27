'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("students", "deletedAt", {
      type: DataTypes.DATE
    })

  },

  async down(queryInterface, Sequelize) {
  
    await queryInterface.removeColumn(
      "deletedAt"
          )
  }
};
