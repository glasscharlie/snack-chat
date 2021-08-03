const { Model, DataTypes } = require('sequelize');
const sequelize =  require('../config/connection');

class Reviews extends Model{}

Reviews.Init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

        },

    }
);

module.exports = Reviews;
