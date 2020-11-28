`use strict`

const express = require('express');
const result = express.Router({ mergeParams: true });
const resultController = require("../../controllers/resultController");

result.get('/', resultController.viewModelResult)
result.get('/information', resultController.information)

module.exports = result;