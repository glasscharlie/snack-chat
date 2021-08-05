const { Comment } = require('../models');

const commentdata = [
  {
    body: 'Comment 1',
  }
  {
    body: 'Comment 2',
  }
  {
    body: 'Comment 3',
  }
  {
    body: 'Comment 4',
  }

];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
