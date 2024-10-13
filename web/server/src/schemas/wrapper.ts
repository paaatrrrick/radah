if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
import { Request, NextFunction, Response } from 'express';
import { RequestWithUser } from '../types/apiTypes';

interface Validatable {
    validate(input: any): any;
  }
  

const JoiWrapper = (joiSchema: Validatable) => {
    return async (req: RequestWithUser, res: Response, next: NextFunction) => {
        const validation = joiSchema.validate(req.body);
        if (validation.error) {
            return res.status(400).send({error: validation.error.details[0].message});
        }
        next();
    }
}

export default JoiWrapper;
