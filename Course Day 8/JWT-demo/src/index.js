const express = require("express");
const morgan = require('morgan');
const jwt = require('jsonwebtoken');

const authRoutes = require('./router/auth.js'); //NOTE: Importing the accounts route as a module
const booksRoutes = require('./router/books.js'); //NOTE: Importing the accounts route as a module

const accessTokenSecret = 'cuhsdhvwiuhweufh827ry48e7uie8efhdiueh'; //NOTE: a secret for the algorithm

const app = express(); //NOTE: Running the imported express function to instantiate it
const PORT = 3000;

// Middleware
app.use(express.json()); //NOTE: middleware to handle JSON objects, this parses incoming request body objects into JSON automatically for us
app.use(morgan('dev')); //NOTE: middleware to log the API call, it's method, route, time it took, response size & response code

const authenticateJWT = (req, res, next) => { //NOTE: custom middleware to authenticate the incoming access token from headers
    const authHeader = req.headers.authorization;

    if (authHeader) {
        console.log(authHeader);
        const token = authHeader.split(' ')[1]; //NOTE: Bearer is assigned to a token like: `Bearer fjew98u8whatever` so as to identify which type of authentication is used
        //NOTE: to get the token split on space and take the 1st element of array of two elements.


        jwt.verify(token, accessTokenSecret, (err, user) => { //NOTE: verify if the accesstoken received is valid or not
            if (err) {
                return res.status(401).send('ACCESS TOKEN NOT VALID');
            }

            req.username = user; //NOTE: data stored in the token
            console.log(req.username);
            next();
        })
    } else {
        res.status(401).send('NO ACCESS TOKEN FOUND');
    }
}

const logger = (req, res, next) => { //NOTE: another custom middleware to demonstrate middleware chaining
    console.log(req.method, req.url);
    next();
}

app.use('/api', authRoutes);
app.use('/api/books', logger, authenticateJWT, booksRoutes); //NOTE: two middlewares registered on the route one after another, this is known as middleware chaining, it is executed in sequential order

app.use('*', (req, res) => { //NOTE: if no routes match the route that is being called, gracefully handle the not found route
    res.status(404).send('NOT ALLOWED');
});

app.listen(PORT, () => //NOTE: runs the server on port: 3000
  console.log(`Express server currently running on port ${PORT}`)
);
