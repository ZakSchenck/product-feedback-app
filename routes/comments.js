const express = require('express');
const router = express.Router();
const { getAllComments, getSingleComment, getReplies } = require('../controllers/comments.js');

router.route('/all/:id').get(getAllComments)
router.route('/:id').get(getSingleComment)
router.route('/replies/:id').get(getReplies)

module.exports = router;