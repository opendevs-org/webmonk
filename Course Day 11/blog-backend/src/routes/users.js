const { Router } = require('express');

const { login, get, register } = require('../controllers/users');
const { auth } = require('../middleware/index');

const router = Router();

router.get('/', auth, get);
router.post('/register', register);
router.post('/login', login);

module.exports = router;
