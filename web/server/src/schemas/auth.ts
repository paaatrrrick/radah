import Joi from 'joi';
import JoiWrapper from './wrapper';


var EmailSignUpSchema = JoiWrapper(Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    name: Joi.string().required(),
}));



export { EmailSignUpSchema }