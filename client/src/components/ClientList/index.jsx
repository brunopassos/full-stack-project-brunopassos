import {
  Container,
  StyledHeader,
  StyledClientSection,
  StyledDataSection,
  StyledOptionsSection,
  StyledOptionsButton,
} from "./styles";
import { useContext } from "react";
import { ClientContext } from "../../context";

import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import ClientModal from "../ClientModal";


const dbTest = [
  {
    name: "Cliente 1",
    email: "email_cliente1@cliente1.com",
    phone: "27992294565",
    id: 0,
  },
  {
    name: "Cliente 2",
    email: "email_cliente2@cliente2.com",
    phone: "28992294565",
    id: 1,
  },
  {
    name: "Cliente 3",
    email: "email_cliente3@cliente3.com",
    phone: "29992294565",
    id: 2,
  },
  {
    name: "Cliente 4",
    email: "email_cliente4@cliente4.com",
    phone: "30992294565",
    id: 3,
  },
  {
    name: "Cliente 5",
    email: "email_cliente5@cliente5.com",
    phone: "31992294565",
    id: 4,
  },
  {
    name: "Cliente 5",
    email: "email_cliente5@cliente5.com",
    phone: "31992294565",
    id: 5,
  },
  {
    name: "Cliente 5",
    email: "email_cliente5@cliente5.com",
    phone: "31992294565",
    id: 6,
  },
  {
    name: "Cliente 5",
    email: "email_cliente5@cliente5.com",
    phone: "31992294565",
    id: 7,
  },
  {
    name: "Cliente 5",
    email: "email_cliente5@cliente5.com",
    phone: "31992294565",
    id: 8,
  },
];

const ClientList = () => {
  const onEdit = () => {
    console.log("Edited");
  };

  const onDelete = () => {
    console.log("Deleted");
  };

  const {
    modalIsOpen,
    setIsOpen,
    openModal,
    closeModal,
    afterOpenModal,
    subtitle,
  } = useContext(ClientContext);

  return (
    <Container>
      <StyledHeader>
        <h2>Clientes</h2>
      </StyledHeader>
      {dbTest.map((client) => {
        return (
          <StyledClientSection key={client.id}>
            <StyledDataSection>
              <p className="name">Nome: {client.name}</p>
              <p className="secondaryData">Email: {client.email}</p>
              <p className="secondaryData">Telefone: {client.phone}</p>
              <StyledOptionsButton onClick={() => openModal()}>
                Detalhes
              </StyledOptionsButton>
            </StyledDataSection>
            <StyledOptionsSection>
              <StyledOptionsButton onClick={() => onEdit()}>
                <AiFillEdit />
              </StyledOptionsButton>
              <StyledOptionsButton onClick={() => onDelete()}>
                <BsFillTrashFill />
              </StyledOptionsButton>
            </StyledOptionsSection>
          </StyledClientSection>
        );
      })}
    </Container>
  );
};

export default ClientList;
