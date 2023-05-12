
import {prisma} from '../../../database/prismaClient';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

interface IAuthenticateClient{
  username: string;
  password: string;
}


export class AuthenticateDeliverymanUseCase{
  async execute({ password, username }:IAuthenticateClient){
      const deliveryman = await prisma.deliveryman.findFirst({
        where: {
          username
        }
      })

      if(!deliveryman){
        throw new Error("Username or password invalid!");
      }

      const passwordMatch = await compare(password, deliveryman.password);

      if(!passwordMatch){
        throw new Error("Username or password invalid!");
      }

      const token = sign({username}, "e10adc3949ba59abbe555057f20f883e",{
        subject: deliveryman.id,
        expiresIn: "1d"
      });

      return token;
  }
}

