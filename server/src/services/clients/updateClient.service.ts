import { AppDataSource } from "../../data-source";
import { Clients } from "../../entities/clients.entity";
import { AppError } from "../../errors/appError";
import { IClientRequest } from "../../interfaces/clients";

const updateClientService = async (
  id: string,
  { name, email, phone }: IClientRequest
): Promise<Clients> => {
  const clientsRepository = AppDataSource.getRepository(Clients);

  const client = await clientsRepository.findOne({ where: { id: id } });

  const clientToUpdate = clientsRepository.create({
    id: client?.id,
    name: name ? name : client?.name,
    email: email ? email : client?.email,
    phone: phone ? phone : client?.phone,
    createdAt: client?.createdAt,
  });

  await clientsRepository.update(id, clientToUpdate);

  return clientToUpdate!;
};

export default updateClientService;
