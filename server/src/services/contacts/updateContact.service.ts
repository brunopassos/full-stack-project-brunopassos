import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { IContactRequest } from "../../interfaces/contacts";
import { Clients } from "../../entities/clients.entity";

const updateContactService = async (
  id: string,
  { email, phone, clientId }: IContactRequest
) => {
  const contactRepository = AppDataSource.getRepository(Contacts);
  const clientsRepository = AppDataSource.getRepository(Clients);
  const contact = await contactRepository.findOneBy({ id: id });
  const client = await clientsRepository.findOneBy({id: clientId});

  console.log(contact)

  const contactToUpdate = {
    email: email ? email : contact?.email,
    phone: phone ? phone : contact?.phone,
    client: clientId ? client! : contact?.client,
  };

  console.log(contactToUpdate);

  await contactRepository.update(id, contactToUpdate);

  return contactToUpdate;
};

export default updateContactService;
