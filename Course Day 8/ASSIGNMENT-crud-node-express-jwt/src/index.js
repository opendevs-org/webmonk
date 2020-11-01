const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

const blog = require('./routes/blog');
const users = require('./routes/users');
const welcome = require('./routes/welcome');

const app = express();

app.set('secretKey', 'hcuahicudhuihfciuhXXYcbyhdbauAAASSSSDdbaiu&22212'); // jwt secret token

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware
const validateUser = (req, res, next) =>
    jwt.verify(req.headers.authorization.split(' ')[1], req.app.get('secretKey'), (err, decoded) => {
        if (err) {
            res.json({ status: "error", message: err.message, data: null });
        } else {
            // add user id to request
            req.body.userId = decoded.id;
            next();
        }
    });

// public route
app.use('/', welcome);
app.use('/login', users);

// private route
app.use('/blog', validateUser, blog);

// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
// handle 404 error
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// handle errors
app.use((err, req, res, next) => {
    console.log(err);

    if (err.status === 404)
        res.status(404).json({ message: "Not found" });
    else
        res.status(500).json({ message: "Something looks wrong :( !!!" });
});

app.listen(3000, () =>
    console.log(`Express server currently running on port 3000`)
);
