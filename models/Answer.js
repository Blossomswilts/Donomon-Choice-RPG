const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a table for answers
class Answer extends Model {}

Answer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'answer',
    },
);

module.exports = Answer;
