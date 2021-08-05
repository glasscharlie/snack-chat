const {Model,DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {};

Post.init({
    body:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize
})

module.exports = Post