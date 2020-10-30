'use strict'

const express = require('express');
const responseHandler = require('./utils/responseHandler');
const app = express();
const routes = require('./routes');
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        message: "hello Restful api server!!",
    });
});

app.use("/api", routes);

// error headling
app.use(function (req, res, next) {
    responseHandler.fail(res, 404, "404 Not found!!");
});


// Listen Servers
app.listen(port, function (req, res) {
    console.log('server connect')
});