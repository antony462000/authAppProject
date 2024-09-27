'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("students",
"email"
    )

  },

  async down(queryInterface, Sequelize) {
   
    await queryInterface.addColumn("students", "email", {
      type: DataTypes.STRING
    })
  }
};
