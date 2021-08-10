const { Photos } = require('../models');

const photodata = [
  {
    user_id: 1,
    food: "pizza",
    review: 'Probably the best pizza I have ever had!',
    url: 'https://cdn.vox-cdn.com/thumbor/U3iUvKeheYCpcIF-5Xt4q_20pBA=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13754614/pizza_chuck.jpeg',
    restaurant: 'chuck e cheese',
  },
 
  {
    user_id: 2,
    review: 'The wings were pretty okay, but the playplace was amazing!',
    url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2020-06-17-at-11-05-28-1592408721.png',
    restaurant: 'chuck e cheese',
    food:"wings"
  },
 
  {
    user_id: 3,
    review: 'Served cold, 45 minutes later.',
    url: 'https://www.courtneyssweets.com/wp-content/uploads/2017/09/chuck-e-cheeses-eat-and-play-4.jpg',
    restaurant: 'chuck e cheese',
    food: "wings"
  },
 
  {
    user_id: 4,
    review: 'This meal made me happy.',
    url: 'https://res.cloudinary.com/culturemap-com/image/upload/ar_4:3,c_fill,g_faces:center,w_980/v1624286024/photos/299180_original.jpg',
    restaurant: 'wingstop',
    food: 'wings'
  },
  {
    user_id: 1,
    review: 'Good food, great atmosphere, fun people.',
    url: 'https://i.ytimg.com/vi/lrZS8LvX1EE/maxresdefault.jpg',
    restaurant: 'weeny hut jr',
    food: 'sundae'
  },
  {
    user_id: 2,
    review: 'Some mighty fine crab cakes!',
    url: 'https://thewoksoflife.com/wp-content/uploads/2015/05/panko-crab-cakes-9.jpg',
    restaurant: 'barking frog',
    food: 'crab cake'
  },
  {
    user_id: 3,
    review: 'Good food, great atmosphere, fun people.',
    url: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/ab/b1/53/photo0jpg.jpg',
    restaurant: 'wendies',
    food: 'hamburger'
  },
];

const seedPhoto = () => Photos.bulkCreate(photodata);

module.exports = seedPhoto;
