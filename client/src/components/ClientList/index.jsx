import {
  Container,
  StyledHeader,
  StyledClientSection,
  StyledDataSection,
  StyledOptionsSection,
  StyledOptionsButton,
  StyledButton,
  StyledForm,
  StyledInput
} from "./styles";
import { useContext, useState } from "react";
import { ClientContext } from "../../context";

import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import ReactModal from "react-modal";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ClientList = () => {
  const {
    clientList,
    handleDeleteClient,
    setClientId,
    clientToEdit,
    setClientToEdit,
    handlePatchEditClient
  } = useContext(ClientContext);
  const history = useHistory();

  const handleOpenModal = (client) => {
    setIsOpen(!modalIsOpen);
    setClientToEdit(client);    
  };

  const handleOnClienteDelete = (clientId) => {
    handleDeleteClient(clientId);
  };

  const handleAddNewClientContact = (id) => {
    setClientId(id);
    history.push("/formClientContact");
  };
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const handleEditClient = (data) => {
    handlePatchEditClient(data, clientToEdit.id);
    reset();
    setIsOpen(!modalIsOpen);
  }

  const schema = yup.object({
    name: yup.string().required("Nome não pode ser vazio"),
    email: yup.string().required("Email não pode ser vazio").email("Digite um email válido"),
    phone: yup.string().required("Telefone não pode ser vazio").min(10, "O telefone deve ter no mínimo 10 digitos.")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });


  return (
    <Container>
      <StyledHeader>
        <h2>Clientes</h2>
      </StyledHeader>
      {clientList.map((client) => {
        return (
          <StyledClientSection key={client.id}>
            <StyledDataSection>
              <p className="name">Nome: {client.name}</p>
              <p className="secondaryData">Email: {client.email}</p>
              <p className="secondaryData">Telefone: {client.phone}</p>
              <StyledOptionsButton onClick={() => handleOpenModal(client.id)}>
                Detalhes
              </StyledOptionsButton>
              <StyledOptionsButton
                onClick={() => handleAddNewClientContact(client.id)}
              >
                Add novo contato
              </StyledOptionsButton>
            </StyledDataSection>
            <StyledOptionsSection>
              <StyledOptionsButton onClick={() => handleOpenModal(client)}>
                <AiFillEdit />
              </StyledOptionsButton>
              <StyledOptionsButton
                onClick={() => handleOnClienteDelete(client.id)}
              >
                <BsFillTrashFill />
              </StyledOptionsButton>
            </StyledOptionsSection>
          </StyledClientSection>
        );
      })}
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <button onClick={closeModal}>Close</button>
        <StyledForm onSubmit={handleSubmit(handleEditClient)}>
          <h2>Editar Cliente</h2>
          <StyledInput
            // helperText={errors.name?.message}
            // error={errors.name?.message}
            placeholder="Nome Completo"
            {...register("name")}
            defaultValue={clientToEdit.name}
          />
          <StyledInput
            // helperText={errors.email?.message}
            // error={errors.email?.message}
            placeholder="Email"
            {...register("email")}
            defaultValue={clientToEdit.email}
          />
          <StyledInput
            // helperText={errors.phone?.message}
            // error={errors.phone?.message}
            placeholder="Telefone com DDD"
            {...register("phone")}
            defaultValue={clientToEdit.phone}
          />
          <StyledButton>Editar Cliente</StyledButton>
        </StyledForm>
      </ReactModal>
    </Container>
  );
};

export default ClientList;
