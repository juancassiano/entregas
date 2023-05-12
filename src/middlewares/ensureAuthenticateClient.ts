import { Request, Response, NextFunction } from 'express';
import {verify} from "jsonwebtoken";

interface IPayLoad{
  sub: string;
}


export async function ensureAuthenticateClient(request: Request, response: Response, next:NextFunction){
  const authHeader = request.headers.authorization;
  if(!authHeader){
    return response.status(401).json({
      message: "Token missing",
    });
  }
  const [, token] = authHeader.split(" ");

  try{
   const {sub} =  verify(token,"e10adc3949ba59abbe56e057f20f883e") as IPayLoad;
   request.id_client = sub;


   return next();

  }catch(err){
    return response.status(401).json({
      message: "invalid token!",
    });
  }
}