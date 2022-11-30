import { Response, Request } from "express";
import { AppError, handleError } from "../../errors/appError";
import deleteClientService from "../../services/clients/deleteClient.service";

const deleteClientController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteClientService(id);
    return res.status(200).json({ data: { message: "Client deleted!" } });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default deleteClientController;
