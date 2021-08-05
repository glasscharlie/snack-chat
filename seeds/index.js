const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedPhotos = require('./photoData');
const seedComments = require('./commentData');
const seedReviews = require('./reviewData');
// const seedFollows= require('./followData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedPhotos();
  await seedComments();
  // await seedReviews();
  // await seedFollows();

  process.exit(0);
};

seedAll();
