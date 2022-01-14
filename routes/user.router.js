const express = require("express");
const router = express.Router();
const userController = require("controllers/user.controller");

router.post('/', userController.create);
router.get('/count', userController.count);
router.get('/:id', userController.fetch);
router.get('/', userController.list);
router.patch('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;
