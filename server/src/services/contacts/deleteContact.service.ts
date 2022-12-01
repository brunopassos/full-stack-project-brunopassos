import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { AppError } from "../../errors/appError";

const deleteContactService = async (id: string): Promise<boolean> => {
    const contactsRepository = AppDataSource.getRepository(Contacts);

    const contacts = await contactsRepository.find();

    const contact = contacts.find((c) => c.id === id);

    if(!contact){
        throw new AppError(404, "Contact not found");
    }

    await contactsRepository.delete(contact!.id);

    return true;
}

export default deleteContactService;