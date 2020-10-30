"use strict";

const crypto = require("crypto");
const path = require("../config/path");
const salt = process.env.SALT;

module.exports = {
    image(req, res, next) {
        const hashed_id = crypto
            .createHash("sha256")
            .update(req.session_name + salt)
            .digest("hex");
        req.img_path = `${path.storage}/${hashed_id}/${path.upload}/`;
        req.img_name = req.session_name;

        return next();
    },
};
