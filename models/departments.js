'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Department extends Model {
        static associate(models) {
            Department.belongsTo(models.Student, {
                foreignKey: 'id',
                targetKey:'dept_id',
                as: 'department',
              })
        }
    }

    Department.init({
        id: {
            allowNull: false,
            type: DataTypes.UUID,
            primaryKey: true
          },
          dept_name: {
            type: DataTypes.STRING,
            allowNull: false
          },
    }, {
        sequelize,
        modelName: 'Department',
        tableName: 'departments',   
        timestamps: true,  // Corrected: 'timestamps' instead of 'timeStamp'
        paranoid: true      // Enable soft deletes if needed
    });

    return Department;
};
