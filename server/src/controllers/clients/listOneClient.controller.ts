import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import listOneClientService from "../../services/clients/listOneClient.service";

const listOneClientController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const client = await listOneClientService(id);
    return res.status(200).json({ data: { message: "Client data", client } });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default listOneClientController;
