const { Comment } = require('../models');

const commentdata = [
  {
    id: 1,
    body: 'Comment 1',
  },
  {
    id: 2,
    body: 'Comment 2',
  },
  {
    id: 3,
    body: 'Comment 3',
  },
  {
    id: 4,
    body: 'Comment 4',
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
