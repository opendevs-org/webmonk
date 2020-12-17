const { Router } = require('express');

const { getAll, getById, create, updateById, deleteById } = require('../controllers/todo');

const router = Router();

router.get('/', getAll);
router.get('/:_id', getById);
router.post('/', create);
router.put('/:_id', updateById);
router.delete('/:_id', deleteById);

module.exports = router;
