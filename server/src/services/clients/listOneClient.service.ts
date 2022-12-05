import { AppDataSource } from "../../data-source";
import { Clients } from "../../entities/clients.entity";
import { AppError } from "../../errors/appError";

const listOneClientService = async (id: string): Promise<Clients> => {
    const clientsRepository = AppDataSource.getRepository(Clients);

    const client = await clientsRepository.findOneBy({id:id});

    if(!client){
        throw new AppError(404, "Client not found");
    }

    return client;
}

export default listOneClientService;