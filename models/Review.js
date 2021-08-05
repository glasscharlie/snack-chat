const {Model,DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Review extends Model {};

Review.init({
    body:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize
})

module.exports = Review