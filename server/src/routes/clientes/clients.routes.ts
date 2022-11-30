import { Router } from "express";
import createClientController from "../../controllers/clients/createClient.controller";
import listClientsController from "../../controllers/clients/listClients.controller";
import listOneClientController from "../../controllers/clients/listOneClient.controller";

const clientsRoutes = Router();

clientsRoutes.post("/clients/register", createClientController);
clientsRoutes.get("/clients/:id", listOneClientController);
clientsRoutes.get("/clients", listClientsController);

export default clientsRoutes;