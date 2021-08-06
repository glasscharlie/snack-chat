const Photos = require('./Photo');
const Comment = require ('./Comment');
const User = require('./User');


User.hasMany(Photos,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Photos.belongsTo(User, {
    foreignKey: 'user_id',
});


User.hasMany(Comment,{
    onDelete:"CASCADE",
    foreignKey:{
        allowNull:false
    }
});
Comment.belongsTo(User);

Photos.hasMany(Comment,{
    onDelete:"CASCADE",
    foreignKey:{
        allowNull:false
    }
});
Comment.belongsTo(Photos);

User.belongsToMany(User, {
    through:"FollowersFollows",
    as:"Followers",
    foreignKey:"followerId",
    otherKey:"FollowId"

});
User.belongsToMany(User, {
    through:"FollowersFollows",
    as:"Followed",
    foreignKey:"followId",
    otherKey:"FollowerId"

});

module.exports = { User, Photos, Comment }