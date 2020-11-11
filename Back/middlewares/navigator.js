"use strict";

const path = require("../config/path");

module.exports = {
    image(req, res, next) {
        req.img_path = '../storage'//`${path.storage}/`;
        return next();
    },
};