import express from 'express';
const router = express.Router();
import { postS3Storage, deleteS3Storage } from '../controllers/s3StorageController';

// const v1Router = require('./v1.js');
// router.use('/v1', v1Router);

router
    .post('/s3storage', postS3Storage)
    .delete('/s3storage', deleteS3Storage);


export default router;
