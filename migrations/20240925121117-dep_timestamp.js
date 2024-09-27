'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await  queryInterface.addColumn("departments","createdAt",{
    type:DataTypes.DATE
   }),
   await  queryInterface.addColumn("departments","updatedAt",{
    type:DataTypes.DATE
   }),
   await  queryInterface.addColumn("departments","deletedAt",{
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
