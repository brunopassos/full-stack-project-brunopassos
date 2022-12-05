import { Response, Request } from "express";
import { AppError, handleError } from "../../errors/appError";
import updateContactService from "../../services/contacts/updateContact.service";

const updateContactController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { email, phone, clientId } = req.body;
    const contact = await updateContactService(id, { email, phone, clientId });
    return res
      .status(200)
      .json({ data: { message: "Contact updated with success", contact } });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default updateContactController;
