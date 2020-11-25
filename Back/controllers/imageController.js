"use strict";

const responseHandler = require("../utils/responseHandler");
const { PythonShell } = require('python-shell');
const fs = require('fs')

let img_path = null;

module.exports = {
    async uploadImg(req, res) {

        img_path = req.file.path

        const options = {
            scriptPath: '',
            args: req.file.path
        }
        try {
            PythonShell.run("model.py", options, function (err, data) {
                if (err) {
                    console.log(err);
                }
                console.log(data)
                responseHandler.success(res, 200, "sucess")
            })
        } catch (err) {
            responseHandler.fail(res, 500, "Processing error");
        }
    },

    viewUploadImage(req, res) {
        let image = img_path
        fs.readFile(image, (err, image) => {
            res.writeHead(200, {
                'Context-Type': 'image/jpg'
            })
            res.write(image);
            res.end();
        });
    }
}
