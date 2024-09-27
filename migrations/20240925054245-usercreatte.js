'use strict';

const { DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable("users",{
      id:{
        allowNull: false,
        type: DataTypes.UUID,
        primaryKey: true
    },
    name:{
        allowNull:false,
        type:DataTypes.STRING,
    },
    email:{
        allowNull:false,
        type:DataTypes.STRING,
    },
    password:{
        allowNull:false,
        type:DataTypes.STRING,
    }
    })
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.dropTable("users")
  }
};
