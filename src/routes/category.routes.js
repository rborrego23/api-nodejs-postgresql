const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');
const verifyToken = require('../middleware/auth.middleware');

router.get('/', verifyToken, categoryController.getAll);
router.get('/:id', verifyToken, categoryController.getById);
router.post('/', verifyToken, categoryController.create);
router.put('/:id', verifyToken, categoryController.update);
router.delete('/:id', verifyToken, categoryController.remove);

module.exports = router;
