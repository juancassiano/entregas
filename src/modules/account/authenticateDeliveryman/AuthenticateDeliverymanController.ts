

import { AuthenticateDeliverymanUseCase } from './AuthenticateDeliverymanUseCase';

import {Request, Response } from "express";


export class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response){

    const { username, password } = request.body;
    const authenticateDeliverymanUseCase =  new AuthenticateDeliverymanUseCase();
    const result = await authenticateDeliverymanUseCase.execute({
      username,
      password
    });

    return response.json(result);
    
  }
}