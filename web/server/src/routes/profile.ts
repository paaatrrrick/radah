if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
import catchAsync from '../methods/catchAsync';
import express, { Response, NextFunction } from 'express';
import { Authenticate } from '../methods/middleware';
import { RequestWithUser } from '../types/apiTypes';

const ProfileRouter = express.Router();

ProfileRouter.get('/get', Authenticate, catchAsync(async (req: RequestWithUser, res: Response, next: NextFunction) => {
    res.status(200).send({ user: req.user });
}));

export default ProfileRouter;