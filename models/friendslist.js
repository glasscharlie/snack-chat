const { Model, DataTypes } = require('sequelize');
const sequelize =  require('../config/connection');


class FriendsList extends Model{}

FriendsList.init(
    {

    }
);

module.exports = FriendsList;