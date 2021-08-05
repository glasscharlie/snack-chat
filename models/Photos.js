const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');


class Photos extends Model{}

Photos.init(
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
    }
},
{
    
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Photos',
    }
);

module.exports = Photos;