import { Response, Request } from "express";
import { AppError, handleError } from "../../errors/appError";
import listClientsService from "../../services/clients/listClients.service";

const listClientsController = async (req: Request, res: Response) => {
  try {
    const clients = await listClientsService();
    return res.status(200).json({data:{ message: "Clients list", clients}})
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};


export default listClientsController;