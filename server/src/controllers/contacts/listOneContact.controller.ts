import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import listOneContactService from "../../services/contacts/listOneContact.service";

const listOneContactController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const contact = await listOneContactService(id);
    return res.status(200).json({ data: { message: "Contact data", contact } });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default listOneContactController;
