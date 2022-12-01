import { Router } from "express";
import createContactController from "../../controllers/contacts/createContact.controller";


const contactsRoutes = Router();

contactsRoutes.post("/contacts/register", createContactController);

export default contactsRoutes;