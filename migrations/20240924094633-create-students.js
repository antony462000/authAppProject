'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await  queryInterface.addColumn("students","createdAt",{
    type:DataTypes.DATE
   }),
   await  queryInterface.addColumn("students","updatedAt",{
    type:DataTypes.DATE
   }),
   await  queryInterface.addColumn("students","deleteddAt",{
    type:DataTypes.DATE,
    allowNull:true
   })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn(
    "createdAt",
    "updatedAt",
    "deleteddAt"
   )
  }
};
