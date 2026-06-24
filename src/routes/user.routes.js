const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const verifyToken = require('../middleware/auth.middleware');

router.get('/', verifyToken, userController.getAll);
router.get('/:id', verifyToken, userController.getById);
router.post('/', verifyToken, userController.create);
router.put('/:id', verifyToken, userController.update);
router.delete('/:id', verifyToken, userController.remove);

module.exports = router;
