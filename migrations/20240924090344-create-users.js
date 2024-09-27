'use strict';
const { DataTypes } = require("sequelize")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("students", {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING
      },
      dept: {
        type: DataTypes.STRING
      }

    })

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("student")
  }
};
