'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("students",
"name","email"
    ),
    await queryInterface.addColumn("students", "college", {
      type: DataTypes.STRING
    })

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn("students", "name", {
      type: DataTypes.STRING
    }),
    await queryInterface.addColumn("students", "email", {
      type: DataTypes.STRING
    }),
    await queryInterface.removeColumn("students",
      "college"
          )
  }
};
