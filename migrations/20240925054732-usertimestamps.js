'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await  queryInterface.addColumn("users","createdAt",{
    type:DataTypes.DATE
   }),
   await  queryInterface.addColumn("users","updatedAt",{
    type:DataTypes.DATE
   }),
   await  queryInterface.addColumn("users","deletedAt",{
    type:DataTypes.DATE,
    allowNull:true
   })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn(
    "createdAt",
    "updatedAt",
    "deletedAt"
   )
  }
};
