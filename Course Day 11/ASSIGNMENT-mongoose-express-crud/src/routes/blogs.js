const { Router } = require('express');

const { getAll, getById, create, getByUser, updateById, deleteById } = require('../controllers/blogs');
const { idCheck } = require('../middleware/index');

const router = Router();

router.get('/', getAll);
router.get('/me', getByUser);
router.get('/:_id', getById);
router.post('/', create);
router.put('/:_id', idCheck, updateById);
router.delete('/:_id', idCheck, deleteById);

module.exports = router;
