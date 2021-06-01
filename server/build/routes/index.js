"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var s3StorageController_1 = require("../controllers/s3StorageController");
// const v1Router = require('./v1.js');
// router.use('/v1', v1Router);
router
    .post('/s3storage', s3StorageController_1.postS3Storage)
    .delete('/s3storage', s3StorageController_1.deleteS3Storage);
exports.default = router;
