import { AppDataSource } from "../../data-source";
import { Clients } from "../../entities/clients.entity";

const listClientsService = async (): Promise<Clients[]> =>{
    const clientsRepository = AppDataSource.getRepository(Clients);

    const clients = await clientsRepository.find();

    return clients;
};

export default listClientsService;