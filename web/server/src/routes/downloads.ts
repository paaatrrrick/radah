if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
import catchAsync from '../methods/catchAsync';
import express, { Response, NextFunction } from 'express';
import { RequestWithUser } from '../types/apiTypes';

const DownloadsRouter = express.Router();

DownloadsRouter.get('/macos-path', catchAsync(async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const path = process.env.MACVM_DOWNLOAD_URL;
    console.log('macos-path', path);
    res.status(200).send({ url : path });
}));

export default DownloadsRouter;