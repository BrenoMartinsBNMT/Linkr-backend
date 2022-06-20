import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export async function validateToken (req,res,next){
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).send("Token not provided");

    const token = authorization.replace("Bearer ", "");
    
    try{
        const validateToken= jwt.verify(token, process.env.ENCRYPTPASSWORD);
        res.locals.user= validateToken

    }catch(e){
        res.sendStatus(400);
    }
    next();
}