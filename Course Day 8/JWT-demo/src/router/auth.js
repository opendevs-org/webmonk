const { Router } = require('express');
const jwt = require('jsonwebtoken');

const router = Router();

const accessTokenSecret = 'cuhsdhvwiuhweufh827ry48e7uie8efhdiueh'; //NOTE: a secret for the algorithm

const user = {
    username: 'opendevs',
    password: 'password'
} //NOTE: a default username & password

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === user.username && password === user.password) {
        const accessToken = jwt.sign({ username }, accessTokenSecret, { expiresIn: '10m' }); //NOTE: generating a access token from the data & secret

        res.status(200).send({
            accessToken //NOTE: sending the access token to frontend to be saved for further communication on authenticated routes
        });
    } else {
        res.status(401).send('NOT AUTHENTICATED');
    }
});

module.exports = router;
