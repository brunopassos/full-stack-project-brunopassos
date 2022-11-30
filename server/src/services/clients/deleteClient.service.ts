import { AppDataSource } from "../../data-source";
import { Clients } from "../../entities/clients.entity";
import { AppError } from "../../errors/appError";

const deleteClientService = async (id: string): Promise<boolean> => {
    const clientsRepository = AppDataSource.getRepository(Clients);

    const clients = await clientsRepository.find();

    const existClient = clients.find((client) => client.id === id);

    if(!existClient){
        throw new AppError(404, "Client not found");
    }

    await clientsRepository.delete(existClient);

    return true;
}

export default deleteClientService;