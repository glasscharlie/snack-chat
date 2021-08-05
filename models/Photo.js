const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');


class Photo extends Model{}

Photo.init(
    { 
        id: { 
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true,

       },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
    },

    review: {
        type: DataTypes.STRING,
    },

    url :{
        type: DataTypes.STRING,
    },

    restaurant: {
        type: DataTypes.STRING,    
    }, 
    food: {
        type: DataTypes,
    }
},
{
    
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Photo',
    }
);

module.exports = Photo;