import { Router } from "express";
import createContactController from "../../controllers/contacts/createContact.controller";
import deleteContactController from "../../controllers/contacts/deleteContact.controller";
import listClientContactsController from "../../controllers/contacts/listClientContacts.controller";
import listOneContactController from "../../controllers/contacts/listOneContact.controller";


const contactsRoutes = Router();

contactsRoutes.post("/contacts/register", createContactController);
contactsRoutes.get("/contacts/client/:id", listClientContactsController);
contactsRoutes.get("/contacts/:id", listOneContactController);
contactsRoutes.delete("/contacts/:id", deleteContactController);

export default contactsRoutes;