const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({ "note": "Welcome to very basic blogging application", "steps": ["authenticate by using /login route", "do CRUD applications with /blog/* routes"] })
});

module.exports = router;
