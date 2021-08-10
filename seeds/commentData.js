const { Comment } = require('../models');

const commentdata = [
  {
    userId: 1,
    PhotoId: 1,
    body: 'Comment 1',
  },
  {
    userId: 2,
    PhotoId: 2,
    body: 'Comment 2',
  },
  {
    userId: 1,
    PhotoId: 3,
    body: 'Comment 3',
  },
  {
    userId: 3,
    PhotoId: 4,
    body: 'Comment 4',
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
