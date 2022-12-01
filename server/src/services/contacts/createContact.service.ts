import { IContactRequest } from './../../interfaces/contacts/index';
import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { AppError } from '../../errors/appError';
import { Clients } from '../../entities/clients.entity';

const createContactService = async ({ email, phone, clientId }:IContactRequest): Promise<Contacts> => {
    const contactsRepository = AppDataSource.getRepository(Contacts);
    const clientsRepository = AppDataSource.getRepository(Clients);

    const client = await clientsRepository.findOneBy({id: clientId});

    const contactAlreadyExists = await contactsRepository.findOneBy({
        email: email
    });


    if(contactAlreadyExists){
        throw new AppError(409, "This contact already exists");
    }

    const newContact = contactsRepository.create({
        email,
        phone,
        client: client!
    })

    await contactsRepository.save(newContact);

    return newContact;

}

export default createContactService;