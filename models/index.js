const Photos = require('./Photos');
const Reviews = require('./Reviews');
const User = require('./User');
const FriendsList = require('./friendslist');


// User.hasMany(Photos,{
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// });


// User.hasMany(Reviews,{
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// });

// User.hasMany(Reviews,{

//     foreignKey: 'user_id',

//     onDelete: 'CASCADE',
// });


// User.hasOne(Friendslist,{
//     foreignKey: 'user_id',
// });

// Photos.BelongTo(User, {
//     foreignKey: 'user_id',
// });

// FriendsList.BelongsTo(User, {
//     foreignKey: 'user_id',
// });

module.exports = { User, Photos };