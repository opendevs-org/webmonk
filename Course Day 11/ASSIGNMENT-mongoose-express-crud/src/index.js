const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
require("dotenv").config();

const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

// set up express
app.use(express.json());
app.use(cors());
app.use('/api', routes);
app.use((req, res, next) => {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});
app.use((err, req, res, next) => {
    console.log(err);
    if (err.status === 404) res.status(404).json({ message: "Not found" });
    else res.status(500).json({ message: "Something looks wrong :( !!!" });
});

mongoose.connect(
    process.env.MONGODB_CONNECTION_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) console.error(err);
        console.log('MONGODB connected successfully');
    }
)

app.listen(PORT, () =>
    console.log(`Express server currently running on port 3000`)
);
