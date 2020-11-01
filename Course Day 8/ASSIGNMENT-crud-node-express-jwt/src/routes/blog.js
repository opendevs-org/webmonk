const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blog');

router.get('/', blogController.getAll);
router.get('/:id', blogController.getById);
router.post('/', blogController.create);
router.put('/:id', blogController.updateById);
router.delete('/:id', blogController.deleteById);

module.exports = router;
