import { Response, Request } from "express";
import { handleError, AppError } from "../../errors/appError";
import createClientService from "../../services/clients/createClient.service";

const createClientController = async (req: Request, res: Response) => {
  try {
    const { name, email, phone } = req.body;
    const client = await createClientService({ name, email, phone });
    return res
      .status(201)
      .json({ data: { message: "Client created", client } });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default createClientController;
