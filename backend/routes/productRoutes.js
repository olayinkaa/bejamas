const express = require('express')
const router = express.Router();
const {getAllProducts, getProductById} = require('../controller/productController')



//@desc GET all products from DB
//@routes GET /api/products
//@access Public
router.get('/',getAllProducts)

//@desc GET all products from DB
//@routes GET /api/products
//@access Public
router.get('/:id', getProductById)

module.exports = router;