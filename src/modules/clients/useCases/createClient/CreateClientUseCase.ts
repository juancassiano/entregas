
interface ICreateClient{
  username: string;
  password: string;
}

export class CreateClientUseCase{

  async execute({password, username}: ICreateClient){
      
  }
}