import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { Router } from "express";

const routes = Router();

const createClientController = new CreateClientController();

routes.post("/clients/", createClientController.handle);

export {routes};