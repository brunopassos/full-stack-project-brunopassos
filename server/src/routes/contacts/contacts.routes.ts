import { Router } from "express";
import createContactController from "../../controllers/contacts/createContact.controller";
import listClientContactsController from "../../controllers/contacts/listClientContacts.controller";
import listOneContactController from "../../controllers/contacts/listOneContact.controller";


const contactsRoutes = Router();

contactsRoutes.post("/contacts/register", createContactController);
contactsRoutes.get("/contacts/client/:id", listClientContactsController);
contactsRoutes.get("/contacts/:id", listOneContactController);

export default contactsRoutes;