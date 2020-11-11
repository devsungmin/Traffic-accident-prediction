'use strict'
const express = require('express');
const routes = express.Router({ mergeParams: true });


//router
const imgRouter = require("./image");

routes.use("/image", imgRouter);

routes.get("/", function (req, res) {
    res.json({
        message: "hello!! This Page is api server"
    })
});

module.exports = routes;