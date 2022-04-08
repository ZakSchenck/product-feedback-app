const express = require('express');
const router = express.Router();
const { getSingleProduct } = require('../controllers/recommendations.js');

router.route('/:id').get(getSingleProduct);

module.exports = router;
