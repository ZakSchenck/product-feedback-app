const express = require('express');
const router = express.Router();
const { getAllComments } = require('../controllers/comments.js');

router.route('/').get(getAllComments)

module.exports = router;