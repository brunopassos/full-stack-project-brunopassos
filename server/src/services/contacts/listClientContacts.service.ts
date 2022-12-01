import { AppDataSource } from "../../data-source";
import { Clients } from "../../entities/clients.entity";
import { Contacts } from "../../entities/contacts.entity";
import { AppError } from "../../errors/appError";

const listClientContactsService = async (id: string): Promise<Contacts[]> =>{
    const clientsRepository = AppDataSource.getRepository(Clients);
    const contactsRepository = AppDataSource.getRepository(Contacts);

    const client = await clientsRepository.findOneBy({id: id});

    if(!client){
        throw new AppError(404, "Client not found!");
    }

    const contacts = await contactsRepository.find({where:{
        client: client!
    }})

    if(contacts.length === 0){
        throw new AppError(404, "No contact found for this client!")
    }

    return contacts;
}

export default listClientContactsService;