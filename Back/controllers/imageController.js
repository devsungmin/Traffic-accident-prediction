"use strict";

const responseHandler = require("../utils/responseHandler");
const { PythonShell } = require('python-shell');
const datauri = require('datauri');
const fs = require('fs')

module.exports = {
    async uploadImg(req, res) {
        console.log(res)
        const options = {
            scriptPath: '',
            args: req.file.path
        }
        try {
            responseHandler.success(res, 200, "Upload Image success")
            // console.log(req)

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

    // FIXME: 업로드 된 이미지 확인
    viewUploadImage(req, res) {
        let image = "image file path"
        fs.readFile(image, (err, image) => {
            res.writeHead(200, {
                'Context-Type': 'image/jpg'
            })
            res.write(image);
            res.end();
        });

        //model에 저장된 파일 불러오기
        // let result = fs.readFile('results/result.json')


        //TODO: 업로드한 이미지 확인하고, ML학습값 Front에 전송 하기
    }
}