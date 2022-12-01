import { IContactRequest } from './../../interfaces/contacts/index';
import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { AppError } from '../../errors/appError';

const createContactService = async ({email, phone}:IContactRequest): Promise<Contacts> => {
    const contactsRepository = AppDataSource.getRepository(Contacts);

    const contactAlreadyExists = await contactsRepository.findOneBy({
        email: email
    });

    if(contactAlreadyExists){
        throw new AppError(409, "This contact already exists");
    }

    const newContact = contactsRepository.create({
        email,
        phone,
    })

    await contactsRepository.save(newContact);

    return newContact;

}

export default createContactService;