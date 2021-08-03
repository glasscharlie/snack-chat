const Photos = require('./Photos');
const Reviews = require('./Reviews');
const User = require('./User');
const FriendsList = require('./friendslist');


User.hasMany(Photos,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(Reviews,{
<<<<<<< HEAD
    foreignKey: 'user_ud',
=======
    foreignKey: 'user_id',
>>>>>>> 6a329b6e3062350b9c3578bbeeb1db226ced7e90
    onDelete: 'CASCADE',
});

User.hasOne(Friendslist,{
    foreignKey: 'user_id',
});

Photos.BelongTo(User, {
    foreignKey: 'user_id',
});

FriendsList.BelongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Reviews, FriendsList, Photos };