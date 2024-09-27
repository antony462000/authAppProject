'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return await queryInterface.removeColumn("students","dept")
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.addColumn("students","dept",{
      type: DataTypes.STRING
    })
  }
};
