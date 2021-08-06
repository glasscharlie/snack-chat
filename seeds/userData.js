const { User } = require('../models');

const userdata = [
  {
    name: 'Charlie',
    username: 'cglass',
    email: 'charlie@email.com',
    password: 'password',
  },
  {
    name: 'Jose',
    username: 'jbenicio',
    email: 'jose@email.com',
    password: 'password',
  },
  {
    name: 'Marcos',
    username: 'mtrejo',
    email: 'marcos@email.com',
    password: 'password',
  },
  {
    name: 'Ran',
    username: 'rgamboa',
    email: 'ran@email.com',
    password: 'password',
  },
  {
    name: 'Joe',
    username: 'jrehfuss',
    email: 'joe@email.com',
    password: 'password',
  },
  {
    name: 'Louis',
    username: 'lcoleman',
    email: 'louis@email.com',
    password: 'password',
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
