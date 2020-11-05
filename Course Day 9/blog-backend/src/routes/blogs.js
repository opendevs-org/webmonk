const { Router } = require('express');

const { getAll, getById, create, updateById, deleteById } = require('../controllers/blogs');
const { idCheck } = require('../middleware/index');

const router = Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', idCheck, updateById);
router.delete('/:id', idCheck, deleteById);

module.exports = router;
