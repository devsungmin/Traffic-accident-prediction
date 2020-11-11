'use strict'

const express = require('express');
const image = express.Router({ mergeParams: true });
const multer = require('multer');
const imageController = require('../../controllers/imageController');

const traffic_img_storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let path = '../storage';
        // let path = req.img_path;
        cb(null, path);
    },
    filename: (req, file, cb) => {
        let filename = `${new Date().valueOf()}`;
        let mimetype = null;

        switch (file.img_type) {
            case "image/jpeg":
                mimetype = ".jpg";
                break;
            case "image/png":
                mimetype = ".png";
                break;
            case "image/gif":
                mimetype = ".gif";
                break;
            case "image/bmp":
                mimetype = ".bmp";
                break;
            default:
                mimetype = ".jpg";
                break;
        }
        cb(null, filename + mimetype);
    }
})
const traffic_img_upload = multer({
    storage: traffic_img_storage,
    limits: { fileSize: 3 * 1024 * 1024 }
})

image.post('/upload', traffic_img_upload.any(), imageController.uploadImg);

image.get('/', (req, res) => {
    res.json({
        message: "upload image page"
    })
})

module.exports = image;