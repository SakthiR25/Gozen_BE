const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController');
const validateProduct = require('../middleware/payload-validator');

// Route to create a new product
router.post('/', validateProduct, productController.createProduct);

// Route to get all products
router.get('/', productController.getAllProducts);

// Route to get a single product by ID
router.get('/:id', productController.getProductById);

// Route to update a product
router.put('/:id', validateProduct, productController.updateProduct);

// Route to delete a product
router.delete('/:id', productController.deleteProduct);

module.exports = router;
