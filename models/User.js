const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

class User extends Model {}

User.init (
    {
         id: { 
             type: DataTypes.Integer, 
             allowNull: false, 
             primaryKey: true,
             autoIncrement: true,

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        friendsList: {
            type: DataTypes.String, 
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',

    }
);

module.exports = User;
