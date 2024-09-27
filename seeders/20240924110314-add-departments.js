'use strict';

const { v4:uuid } = require("uuid")



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert("departments",[
      {
        id:uuid(),
        dept_name:"CSE",
        
      },
      {
        id:uuid(),
        dept_name:"AD",
        
      },
      {
        id:uuid(),
        dept_name:"MECH",
        
      },
      {
        id:uuid(),
        dept_name:"ECS",
      },
      {
        id:uuid(),
        dept_name:"CIVIL",
      },
      {
        id:uuid(),
        dept_name:"CS",
      },
    ])
   
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("departments", null, {})
  }
};
