const { Router } = require('express');
const router = Router();
const UserController = require('../controllers/user.controller')


router.get('/', UserController.getAll);
router.get('/:id', UserController.getById);
router.post('/', UserController.addUser);
router.delete('/:id', UserController.deleteUser);
router.put('/:id', UserController.updateUser);

module.exports = router;