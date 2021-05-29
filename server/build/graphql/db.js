"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mysql = void 0;
require("dotenv").config();
var promise_mysql_1 = __importDefault(require("promise-mysql"));
var connectionConfig = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_PASSWORD,
    // port: process.env.MYSQL_PORT,
    port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : NaN,
    multipleStatements: true
};
exports.mysql = promise_mysql_1.default.createPool(connectionConfig);
