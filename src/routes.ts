import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { AuthenticateClientController } from './modules/account/authenticateClientUseCase/AuthenticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { Router } from "express";
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateDealiveryController } from './modules/deliveries/useCases/createDelivery/CreateDealiveryController';

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliveryController = new AuthenticateDeliverymanController();
const deliveryController = new CreateDealiveryController();

routes.post("/clients/", createClientController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);
routes.post("/client/authenticate", authenticateClientController.handle);
routes.post("/deliveryman/authenticate", authenticateDeliveryController.handle);
routes.post("/delivery", deliveryController.handle);
export {routes};