'use strict';
const { DataTypes } = require("sequelize")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("departments", {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        primaryKey: true
      },
      dept_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      building: {
        type: DataTypes.STRING
      }

    })

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("departments")
  }
};
