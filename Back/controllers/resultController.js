"use strict"

const responseHandler = require("../utils/responseHandler");
const fs = require('fs');


module.exports = {
    viewModelResult(req, res) {
        let model_result = 'results/result.json'
        try {
            const result = JSON.parse(
                fs.readFileSync(model_result).toString()
            );
            responseHandler.custom(res, 200, result);
        } catch (err) {
            responseHandler.fail(res, 500, "Processing fail");
        }
    }
}