const Photos = require('./Photo');
const Comment = require ('./Comment');
const User = require('./User');
const Review = require('./Review');


User.hasMany(Photos,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Photos.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Review,{
    onDelete:"CASCADE",
    foreignKey:{
        allowNull:false
    }
});
Review.belongsTo(User);

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
    otherKEy:"FollowId"

});
User.belongsToMany(User, {
    through:"FollowersFollows",
    as:"Followed",
    foreignKey:"followId",
    otherKEy:"FollowerId"

});

module.exports = { User, Photos, Comment, Review }