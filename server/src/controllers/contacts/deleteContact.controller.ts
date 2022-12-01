import { Response, Request } from "express";
import { AppError, handleError } from "../../errors/appError";
import deleteContactService from "../../services/contacts/deleteContact.service";

const deleteContactController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteContactService(id);
    return res
      .status(200)
      .json({ data: { message: "Contact deleted with success! " } });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default deleteContactController;
