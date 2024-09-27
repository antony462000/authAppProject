'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("students",
"deleteddAt"
    )

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn("students", "deleteddAt", {
      type: DataTypes.DATE
    })
  }
};
