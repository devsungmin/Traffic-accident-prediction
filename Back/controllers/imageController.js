"use strict";

const models = require("../models");
const responseHandler = require("../utils/responseHandler");
const datauri = require('datauri');

module.exports = {
    async uploadImg(req, res) {
        try {
            responseHandler.success(res, 200, "Upload Image success")

        } catch (err) {
            console.log(err);
            responseHandler.fail(res, 500, "Processing error");
        }
    },

    // FIXME: 업로드 된 이미지 확인
    viewUploadImage(req, res) {
        let image_uri = datauri(image.Image.path);
        responseHandler.custom(res, 200, {
            result: "sucess!",
            path: image_uri,
        })
    }
}                       