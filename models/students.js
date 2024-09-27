'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Student extends Model {
        static associate(models) {
            Student.belongsTo(models.User, {
                foreignKey: 'user_id',
                as: 'user',
              })
              Student.belongsTo(models.Department, {
                foreignKey: 'dept_id',
                as: 'department',
              })
        }
    }

    Student.init({
        id: {
            allowNull: false,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4, // Ensure default value for UUID is set
            primaryKey: true
        },
        college: {
            type: DataTypes.STRING
        },
        user_id: {
            type: DataTypes.UUID
        },
        dept_id: {
            type: DataTypes.UUID
        }
    }, {
        sequelize,
        modelName: 'Student',
        tableName: 'students',
        timestamps: true,  // Corrected: 'timestamps' instead of 'timeStamp'
        paranoid: true      // Enable soft deletes if needed
    });

    return Student;
};
