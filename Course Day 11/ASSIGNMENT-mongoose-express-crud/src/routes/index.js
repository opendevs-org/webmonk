const { Router } = require('express');

const { auth } = require('../middleware/index');

const router = Router();

router.use('/users', require('./users'));
router.use('/blogs', auth, require('./blogs'));

module.exports = router;
