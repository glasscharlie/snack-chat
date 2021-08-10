const { Photos } = require('../models');

const photodata = [
  {
    user_id: 1,
    review: 'Fantastic appetizer!',
    url: 'http://placeimg.com/640/480/any',
    restaurant: 'Appetizers R Us',
  },
 
  {
    user_id: 2,
    review: 'This drink was too wet.',
    url: 'http://placeimg.com/640/480/any',
    restaurant: 'Quenchers',
  },
 
  {
    user_id: 3,
    review: 'Served cold, 45 minutes later.',
    url: 'http://placeimg.com/640/480/any',
    restaurant: 'Served by Sloths',
  },
 
  {
    user_id: 4,
    review: 'This meal made me happy.',
    url: 'http://placeimg.com/640/480/any',
    restaurant: 'McDonalds',
  },
];

const seedPhoto = () => Photos.bulkCreate(photodata);

module.exports = seedPhoto;
