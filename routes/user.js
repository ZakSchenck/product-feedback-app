const express = require('express');
const router = express.Router();
const { getUserData, getSingleUser, createUser } = require('../controllers/user.js');

router.route('/').get(getUserData);
router.route('/:id').get(getSingleUser);
router.route('/').post(createUser)

module.exports = router;