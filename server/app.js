const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
// const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const addRequestId = require("express-request-id")();
const morgan = require("morgan");
// const logger = require("./logger");
const app = express();
const helpers = require('./helpers/helpers');
// const errorHandlers = require('./handlers/errorHandlers');

app.use(helmet());
app.use(bodyParser.json());
app.use(compression());
app.use(addRequestId);

app.use(express.urlencoded({
    extended: false
}));


app.use(express.static(path.join(__dirname, 'public')));


// pass variables to our templates + all requests
app.use((req, res, next) => {
    res.locals.h = helpers;
    // res.locals.flashes = req.flash();
    res.locals.user = req.user || null;
    res.locals.currentPath = req.path;
    next();
});

const routes = require("./routes/index");



app.use("/", routes);



module.exports = app;