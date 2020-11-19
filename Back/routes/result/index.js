`use strict`

const express = require('express');
const result = express.Router({ mergeParams: true });
const resultController = require("../../controllers/resultController");

result.get('/', resultController.viewModelResult)


module.exports = result;