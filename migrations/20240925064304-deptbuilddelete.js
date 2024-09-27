'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("departments",
"building"
    )

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn("departments", "building", {
      type: DataTypes.DATE
    })
  }
};
