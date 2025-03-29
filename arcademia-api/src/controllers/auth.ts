import express , {
    NextFunction,
    Request,
    Response
} from 'express';

import { v4 } from 'uuid';
import * as argon from 'argon2';
import db from '@/config/db';

import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { getSignedJwtToken, matchPassword } from '@/utils/auth';
import { ZUser, TUser } from '@/types/user';

// id: serial('id').primaryKey(),
// name: text('name'),
// email: text('email'),
// role: text('role'),
// password: text('password'),
// resetPasswordToken: text('resetPasswordToken'),
// resetPasswordExpire: text('resetPasswordExpire'),
// createdAt: date('createdAt'),

const sendTokenResponse = (user : TUser, statusCode : number, res : Response) => {

    const token = getSignedJwtToken(user.id);
    // if(process.env.NODE_ENV === 'production') {
    //     const options = {
    //         expires: new Date(Date.now() + (Number(process.env.JWT_COOKIE_EXPIRE) || 1) * 24 * 60 * 60 * 1000),
    //         httpOnly: true,
    //         secure: true
    //     }
    // }
    const options = {
        expires: new Date(Date.now() + (Number(process.env.JWT_COOKIE_EXPIRE) || 1) * 24 * 60 * 60 * 1000),
        httpOnly: true
    }

    res.status(statusCode).cookie("token", token, options).json({ 
        success: true, 
        token 
    });
};

export const register = async (req : Request , res : Response, next: NextFunction) => {
    try {
        const {
            name,
            email,
            role,
            password,
            resetPasswordToken,
            resetPasswordExpire,
            createdAt
        } = req.body;
       
        const hashedPassword = await argon.hash(password);        

        const userPayload = ZUser.safeParse({
            'id': v4(),
            'name' : name,  
            'email' : email,
            'role' : role,
            'password' : hashedPassword,
            'resetPasswordToken' : resetPasswordToken,
            'resetPasswordExpire' : resetPasswordExpire,
            'createdAt' : createdAt
        });

        if(!userPayload.success) {
            return res.status(400).json({
                success: false,
                message: "Invalid User Input",
                errors: userPayload.error.errors,
            });
        }

        const user = await db.insert(users).values(userPayload.data);
        
        sendTokenResponse(userPayload.data, 201, res);
        

    } catch (error) {
        res.status(400).json({
            success: false
        });
        console.log(error)
    }
}

export const login = async (req : Request, res : Response , next: NextFunction) => {
    try{
        const { email, password } = req.body;

        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "please provide email and password"
            });
        }
        const user = await db.query.users.findFirst({
            where: eq(users.email, email)
        })

        if(!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid Credentials"
            })
        }
        console.log(user);

        const isMatch = await matchPassword(password, user.password)
        console.log(isMatch);

        if(!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid Credentials"
            })
        }

        sendTokenResponse(user, 200, res);
        
    } catch (error) {
        return res.status(400).json({
                success: false,
                message: "Fail to login"
        });
    }
}

export const logout = (req: Request, res: Response, next: NextFunction) => {
    res.cookie("token", "none", {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true
    });
    
    res.status(200).json({
        success: true, 
        data: {}
    });
};

