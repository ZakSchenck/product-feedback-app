const express = require('express');
const router = express.Router();
const { getSingleProduct, createProduct, deleteProduct } = require('../controllers/recommendations.js');

router.route('/:id').get(getSingleProduct);
router.route('/').post(createProduct);
router.route('/:id').delete(deleteProduct)

module.exports = router;
