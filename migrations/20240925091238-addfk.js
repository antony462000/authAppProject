'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await  queryInterface.addColumn("students","user_id",{
    type:DataTypes.UUID
   }),
   await  queryInterface.addColumn("students","dept_id",{
    type:DataTypes.UUID
   })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn(
    "user_id",
    "dept_id"
   )
  }
};
