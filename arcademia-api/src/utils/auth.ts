import jwt from "jsonwebtoken";
import * as argon from 'argon2'

export const getSignedJwtToken = (id: string) => {
    return jwt.sign({ id }, process.env.JWT_SECRET!, {
        expiresIn: process.env.JWT_EXPIRE,
    });
}

export const matchPassword = async (entered: string, fromDb: string) => {
    return await argon.verify(fromDb, entered);
}