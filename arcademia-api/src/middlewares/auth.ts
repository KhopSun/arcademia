import {
    Request,
    Response,
    NextFunction
    } from 'express';
import jwt, {JwtPayload} from 'jsonwebtoken';
import db from '@/config/db';
import { users } from '@/db/schema';
import { ZUser , TUser } from '@/types/user';
import { eq } from 'drizzle-orm';

type ReqWUser = Request & { user: TUser[]};

type DecodedJWT = JwtPayload | string;



export const authenToken = async (req: ReqWUser, res: Response, next: NextFunction) => {
    let token;
    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ){
        token = req.headers.authorization.split(' ')[1];
    }

    if(!token || token == "null"){
        return res.status(401).json({
            success: false,
            message: 'Not authenticated'
        });
    }

    try {
         
        const decode : DecodedJWT = jwt.verify(token, process.env.JWT_SECRET!);

        console.log(decode);

        if(typeof decode === 'string'){
            return res.status(401).json({
                success: false,
                message: 'Not authenticated'
            });
        } 
        req.user = await db.select().from(users).where(eq(users.id, decode.id));
        
        next(); 

    } catch (err) { 
        return res.status(401).json({
            success: false,
            message: 'Failed to authenticate token'
        });
    }


}