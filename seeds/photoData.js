const { Photos } = require('../models');

const photodata = [
  {
    user_id: 1,
    review: 'Fantastic appetizer!',
    url: 'fakeurl.com',
    restaurant: 'Appetizers R Us',
  },
 
  {
    user_id: 2,
    review: 'This drink was too wet.',
    url: 'fakeurl.com',
    restaurant: 'Quenchers',
  },
 
  {
    user_id: 3,
    review: 'Served cold, 45 minutes later.',
    url: 'fakeurl.com',
    restaurant: 'Served by Sloths',
  },
 
  {
    user_id: 4,
    review: 'This meal made me happy.',
    url: 'fakeurl.com',
    restaurant: 'McDonalds',
  },
];

const seedPhoto = () => Photos.bulkCreate(photodata);

module.exports = seedPhoto;
