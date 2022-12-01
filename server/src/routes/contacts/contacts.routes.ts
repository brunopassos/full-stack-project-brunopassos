import { Router } from "express";
import createContactController from "../../controllers/contacts/createContact.controller";
import listClientContactsController from "../../controllers/contacts/listClientContacts.controller";


const contactsRoutes = Router();

contactsRoutes.post("/contacts/register", createContactController);
contactsRoutes.get("/contacts/:id", listClientContactsController);

export default contactsRoutes;