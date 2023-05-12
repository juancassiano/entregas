import { prisma } from "../../../../database/prismaClient";
import { hash } from 'bcrypt';

interface ICreateDeliveryman{
  username: string;
  password: string;
}


export class CreateDeliverymanUseCase{
  async execute({password, username}: ICreateDeliveryman){
    const deliverymanExist = await prisma.deliveryman.findFirst({
      where:{
        username:{
          mode: "insensitive"
        }
      }
    });

    if(deliverymanExist){
      throw new Error("Deliveryman already exists");
    }

    const hashPassword = await hash(password, 10);

    const delivery = await prisma.deliveryman.create({
      data: {
        username,
        password: hashPassword
      }
    });

    return delivery;
  }
}