'use strict'
const express = require('express');
const routes = express.Router({ mergeParams: true });

//router
const imgRouter = require("./image");
const resultRouter = require("./result");

routes.use("/image", imgRouter);
routes.use("/result", resultRouter);

routes.get("/", function (req, res) {
    res.json({
        message: "hello!! This Page is api server"
    })
});

module.exports = routes;