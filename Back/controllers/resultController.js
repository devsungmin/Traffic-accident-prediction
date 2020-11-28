"use strict"

const responseHandler = require("../utils/responseHandler");
const fs = require('fs');
const models = require('../models')


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
    },

    information(req, res) {
        let result = 'results/result.json'
        const testResult = JSON.parse(fs.readFileSync(result).toString()).result
        testResult.sort((a, b) => {
            return a.accuracy > b.accuracy ? -1 : 1;
        })
        models.trafficAccident.findOne({ accidentType: testResult[0].traffic })
            .then(traffic => {
                const information = traffic.info
                responseHandler.custom(res, 200, information)
            });


    },
}