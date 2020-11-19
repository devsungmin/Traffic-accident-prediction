'use strict'

const express = require('express');
const responseHandler = require('./utils/responseHandler');
const app = express();
const routes = require('./routes');
const sequelize = require('./models').sequelize;
const port = process.env.PORT || 3000;
const cors = require('cors')

app.get('/', (req, res) => {
    res.json({
        message: "hello Restful api server!!",
    });
});

//CORS 처리
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    next();
});

app.use(cors());

sequelize.sync();

app.use("/api", routes);

// error headling
app.use(function (req, res, next) {
    responseHandler.fail(res, 404, "404 Not found!!");
});


// Listen Servers
app.listen(port, function (req, res) {
    console.log('server connect')
});