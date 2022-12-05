import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import listClientContactsService from "../../services/contacts/listClientContacts.service";

const listClientContactsController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const contacts = await listClientContactsService(id);
    return res.status(200).send(contacts);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default listClientContactsController;
