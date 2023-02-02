const { Router } = require('express');
const router = Router();
const ProductController = require('../controllers/product.controller')


router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getById);
router.post('/', ProductController.addProduct);
router.delete('/:id', ProductController.deleteProduct);
router.put('/:id', ProductController.updateProduct);

module.exports = router;