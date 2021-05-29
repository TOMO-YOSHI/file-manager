"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
var apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type File {\n        file_id: Int\n        user_id: Int\n        file_name: String\n        upload_date: String\n        last_edit_date: String\n        memo_text: String\n        file_url: String\n        image_url: String\n        file_type: String\n        file_size_kb: Int\n    }\n\n    type Query {\n        files(file_type: String): [File]\n    }\n"], ["\n    type File {\n        file_id: Int\n        user_id: Int\n        file_name: String\n        upload_date: String\n        last_edit_date: String\n        memo_text: String\n        file_url: String\n        image_url: String\n        file_type: String\n        file_size_kb: Int\n    }\n\n    type Query {\n        files(file_type: String): [File]\n    }\n"])));
var templateObject_1;
