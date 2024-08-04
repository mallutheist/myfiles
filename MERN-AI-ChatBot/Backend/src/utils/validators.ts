import { NextFunction, Request, Response } from "express";
import { ValidationChain, body, validationResult } from "express-validator";

export const validate = (validations: ValidationChain[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        for (let validation of validations) {               // how to write conventional for loop in this context ,check: https://g.co/bard/share/98aac2755446
            const result = await validation.run(req);
            if (!result.isEmpty()) {   // result will be empty if the validation is success, it become non empty when error occurs
                break;
            }
        }
        const errors = validationResult(req);  //predefined,imported above
        if (errors.isEmpty()) {            // after solving all errors 
            return next();
        }
        return res.status(422).json({ errors: errors.array() })

    }

};


export const loginValidator = [
    body("email").trim().isEmail().withMessage('Email is required'),
    body('password').trim().isLength({ min: 6 }).withMessage('Password should contain atleast 6 charectors'),
]

export const signupValidator = [
    body("name").notEmpty().withMessage('Name is required'),
    ...loginValidator
    // body("email").trim().isEmail().withMessage('Email is required'),  // if it is empty isemail become false so need of 'notEmpty()'
    // body("password").trim().isLength({ min: 6 }).withMessage('Password should contain atleast 6 charectors'),
];

