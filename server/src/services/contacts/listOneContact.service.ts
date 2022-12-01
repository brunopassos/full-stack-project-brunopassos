import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { AppError } from "../../errors/appError";

const listOneContactService = async (id: string): Promise<Contacts> => {
    const contactsRepository = AppDataSource.getRepository(Contacts);

    const contact = await contactsRepository.findOneBy({id:id});

    if(!contact){
        throw new AppError(404, "Contact not Found");
    }

    return contact;
}

export default listOneContactService