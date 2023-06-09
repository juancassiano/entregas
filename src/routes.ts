import { FindAllDeliveriesDeliverymanController } from './modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController';
import { UpdateDeliverymanController } from './modules/deliveries/useCases/updateDeliveryman/useCases/UpdateDeliverymanController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { AuthenticateClientController } from './modules/account/authenticateClientUseCase/AuthenticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { Router } from "express";
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';
import { FindAllAvailableController } from './modules/deliveries/useCases/FindAllAvailable/FindAllAvailableController';
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman';
import { FindAllDeliveriesController } from './modules/clients/deliveries/FindAllDeliveriesController';
import { UpdateEndDateController } from './modules/deliveries/useCases/updateEndDate/UpdateEndDateController';

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliveryController = new AuthenticateDeliverymanController();
const deliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllDeliveriesClient = new FindAllDeliveriesController();
const findAllDeliveriesDeliveryman = new FindAllDeliveriesDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

routes.post("/clients/", createClientController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);
routes.post("/clients/authenticate", authenticateClientController.handle);
routes.post("/deliveryman/authenticate", authenticateDeliveryController.handle);
routes.post("/delivery",ensureAuthenticateClient ,deliveryController.handle);
routes.get("/delivery/available", ensureAuthenticateDeliveryman, findAllAvailableController.handle);
routes.put("/delivery/updateDeliveryman/:id", ensureAuthenticateDeliveryman, updateDeliverymanController.handle);
routes.get("/clients/deliveries", ensureAuthenticateClient, findAllDeliveriesClient.handle);
routes.get("/deliveryman/deliveries", ensureAuthenticateDeliveryman, findAllDeliveriesDeliveryman.handle);
routes.put("/delivery/updateEndDate/:id", ensureAuthenticateDeliveryman,updateEndDateController.handle);
export {routes};