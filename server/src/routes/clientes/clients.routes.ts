import { Router } from "express";
import createClientController from "../../controllers/clients/createClient.controller";
import deleteClientController from "../../controllers/clients/deleteClient.controller";
import listClientsController from "../../controllers/clients/listClients.controller";
import listOneClientController from "../../controllers/clients/listOneClient.controller";
import updateClientController from "../../controllers/clients/updateClient..controller";

const clientsRoutes = Router();

clientsRoutes.post("/clients/register", createClientController);
clientsRoutes.delete("/clients/:id", deleteClientController);
clientsRoutes.patch("/clients/:id", updateClientController);
clientsRoutes.get("/clients/:id", listOneClientController);
clientsRoutes.get("/clients", listClientsController);

export default clientsRoutes;