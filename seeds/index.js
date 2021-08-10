const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedPhotos = require('./photoData');
const seedComments = require('./commentData');

const seedAll = async () => {

  await sequelize.sync({ force: true },);

  await seedUsers();
  await seedPhotos();
  await seedComments();

  process.exit(0);
};

seedAll();
