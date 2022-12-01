import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import createContactService from "../../services/contacts/createContact.service";

const createContactController = async (req: Request, res: Response) => {
  try {
    const { email, phone } = req.body;
    const contact = await createContactService({ email, phone } );
    return res.status(201).json({data: {message: "Contact created", contact}})
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default createContactController;
