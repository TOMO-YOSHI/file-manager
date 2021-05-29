"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
var apollo_server_express_1 = require("apollo-server-express");
var getFileById = function (id, db) { return __awaiter(void 0, void 0, void 0, function () {
    var files;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db.then(function (pool) {
                    return pool.query("\n            SELECT * FROM files WHERE file_id = ?\n        ", [id]).then(function (result) { return result; });
                })];
            case 1:
                files = _a.sent();
                return [2 /*return*/, files.length ? files[0] : null];
        }
    });
}); };
exports.resolvers = {
    // export const resolvers: Resolvers<ApolloContext> = {
    Query: {
        files: function (parent, args, context) {
            return __awaiter(this, void 0, void 0, function () {
                var query, files;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            query = 'SELECT * FROM files';
                            return [4 /*yield*/, context.mysql.then(function (pool) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, pool.query(query)
                                                    .then(function (result) { return result; })
                                                    .catch(function (error) { throw error; })];
                                            case 1: return [2 /*return*/, _a.sent()];
                                        }
                                    });
                                }); })];
                        case 1:
                            files = _a.sent();
                            // console.log(files);
                            return [2 /*return*/, files];
                    }
                });
            });
        },
    },
    Mutation: {
        createFile: function (parent, args, context) {
            return __awaiter(this, void 0, void 0, function () {
                var input, columns, sqlParams, file, createdFile, i, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            input = args.input;
                            columns = [
                                'file_name',
                                'upload_date',
                                'file_url',
                                'file_type',
                                'file_size_kb'
                            ];
                            sqlParams = [
                                input.file_name,
                                input.upload_date,
                                input.file_url,
                                input.file_type,
                                input.file_size_kb
                            ];
                            if (input.user_id) {
                                columns.push('user_id');
                                sqlParams.push(input.user_id);
                            }
                            ;
                            if (input.memo_text) {
                                columns.push('memo_text');
                                sqlParams.push(input.memo_text);
                            }
                            ;
                            if (input.image_url) {
                                columns.push('image_url');
                                sqlParams.push(input.image_url);
                            }
                            ;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, context.mysql.then(function (pool) {
                                    var placeholder = [];
                                    for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                                        var column = columns_1[_i];
                                        placeholder.push('?');
                                    }
                                    var query = "\n                        INSERT INTO \n                            files(" + columns.join(',') + ")\n                            values(" + placeholder.join(',') + ")";
                                    return pool.query(query, sqlParams).then(function (result) { return result; }).catch(function (error) { throw error; });
                                })];
                        case 2:
                            file = _a.sent();
                            createdFile = {};
                            for (i = 0; i < columns.length; i++) {
                                createdFile[columns[i]] = sqlParams[i];
                            }
                            return [2 /*return*/, __assign(__assign({}, createdFile), { file_id: file.insertId })];
                        case 3:
                            error_1 = _a.sent();
                            console.log(error_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
        deleteFile: function (parent, args, context) {
            return __awaiter(this, void 0, void 0, function () {
                var file_id, file, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            file_id = args.file_id;
                            file = getFileById(args.file_id, context.mysql);
                            if (!file) {
                                throw new apollo_server_express_1.UserInputError('Could not find your file.');
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, context.mysql.then(function (pool) {
                                    return pool.query("DELETE FROM files WHERE file_id = ?", [file_id]).catch(function (error) {
                                        throw error;
                                    });
                                })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, file];
                        case 3:
                            error_2 = _a.sent();
                            console.log(error_2);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
    }
};
