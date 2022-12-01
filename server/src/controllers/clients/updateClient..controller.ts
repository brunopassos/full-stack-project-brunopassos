import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import updateClientService from "../../services/clients/updateClient.service";

const updateClientController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    const clientUpdated = await updateClientService(id, { name, email, phone });
    return res
      .status(200)
      .json({ data: { message: "Client updated", client: clientUpdated } });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default updateClientController;
