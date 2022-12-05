import { IClient, IClientRequest } from './../../interfaces/clients/index';
import { AppDataSource } from "../../data-source";
import { Clients } from "../../entities/clients.entity";
import { AppError } from '../../errors/appError';

const createClientService = async ({name, email, phone}:IClientRequest): Promise<Clients> => {
    const clientRepository = AppDataSource.getRepository(Clients);

    const nameAlreadyExists = await clientRepository.findOneBy({
        name: name
    });

    if(nameAlreadyExists){
        throw new AppError(409, "This cliente already exists");
    }


    const newClient = clientRepository.create({
        name,
        email,
        phone,
        createdAt: new Date()
    })

    await clientRepository.save(newClient);

    return newClient;
}

export default createClientService;