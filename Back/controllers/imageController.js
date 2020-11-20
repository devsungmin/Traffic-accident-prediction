"use strict";

const responseHandler = require("../utils/responseHandler");
const { PythonShell } = require('python-shell');
const datauri = require('datauri');
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
            responseHandler.success(res, 200, "Upload Image success")

            // TODO: ML 코드 실행 시키고 이미지 전송 하기
            PythonShell.run("model.py", options, function (err, data) {
                if (err) throw err;
                console.log(data)
            })
        } catch (err) {
            console.log("error 500");
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