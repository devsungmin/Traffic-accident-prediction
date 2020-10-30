// const responseHandler = require("@utils/responseHandler");
"use strict";

module.exports = {
    async uploadImg(req, res) {
        let file_name = req.params.file_name;
        let create_list = [];

        for (var file of req.files) {
            create_list.push({
                originalFileName: file_name,
                originalPath: file.path
            });
        }
    },
}