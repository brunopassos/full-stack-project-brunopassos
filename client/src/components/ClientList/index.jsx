import {
  Container,
  StyledHeader,
  StyledClientSection,
  StyledDataSection,
  StyledOptionsSection,
  StyledOptionsButton,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledClientContactsSection,
} from "./styles";
import { useContext, useState, useRef, useEffect } from "react";
import { ClientContext } from "../../context";

import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit, AiOutlineMenu } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import ReactModal from "react-modal";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";

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

  useEffect(()=>{
    handleGetClientsList();
  },[])

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const {
    clientList,
    handleDeleteClient,
    setClientId,
    clientToEdit,
    setClientToEdit,
    handlePatchEditClient,
    handleGetClientContactsList,
    clientContactsList,
    handleDeleteClientContact,
    clientId,
    handleGetClientsList
  } = useContext(ClientContext);
  const history = useHistory();

  const handleOpenModal = (client) => {
    setIsOpen(!modalIsOpen);
    setClientToEdit(client);
  };

  const handleOpenContactsModal = (clientId) => {
    handleGetClientContactsList(clientId);
    setContactsIsOpen(!modalContactsIsOpen);
  };

  const handleOnClienteDelete = (clientId) => {
    handleDeleteClient(clientId);
  };

  const handleAddNewClientContact = (id) => {
    setClientId(id);
    history.push("/formClientContact");
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContactsIsOpen, setContactsIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function closeContactsModal() {
    setContactsIsOpen(false);
    setClientId([]);
  }

  const handleEditClient = (data) => {
    handlePatchEditClient(data, clientToEdit.id);
    reset();
    setIsOpen(!modalIsOpen);
  };

  const handleOnDeleteClientContact = (contactId) => {
    handleDeleteClientContact(contactId, clientId);
  };

  const schema = yup.object({
    name: yup.string().required("Nome n??o pode ser vazio"),
    email: yup
      .string()
      .required("Email n??o pode ser vazio")
      .email("Digite um email v??lido"),
    phone: yup
      .string()
      .required("Telefone n??o pode ser vazio")
      .min(10, "O telefone deve ter no m??nimo 10 digitos."),
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
        <div className="menuIcon">
          <AiOutlineMenu
            fontSize={40}
            ref={btnRef}
            colorScheme="teal"
            onClick={onOpen}
          />
        </div>
      </StyledHeader>
      {clientList.map((client) => {
        return (
          <StyledClientSection key={client.id}>
            <StyledDataSection>
              <p className="name">Nome: {client.name}</p>
              <p className="secondaryData">Email: {client.email}</p>
              <p className="secondaryData">Telefone: {client.phone}</p>
              <StyledOptionsButton
                onClick={() => handleOpenContactsModal(client.id)}
              >
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
            placeholder="Nome Completo"
            {...register("name")}
            defaultValue={clientToEdit.name}
          />
          <StyledInput
            placeholder="Email"
            {...register("email")}
            defaultValue={clientToEdit.email}
          />
          <StyledInput
            placeholder="Telefone com DDD"
            {...register("phone")}
            defaultValue={clientToEdit.phone}
          />
          <StyledButton>Editar Cliente</StyledButton>
        </StyledForm>
      </ReactModal>

      <ReactModal
        isOpen={modalContactsIsOpen}
        onRequestClose={closeContactsModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <button onClick={closeContactsModal}>x</button>
        <StyledClientContactsSection>
          {clientContactsList.map((contact) => {
            return (
              <StyledClientSection key={contact.id}>
                <StyledDataSection>
                  <p className="secondaryData">Email: {contact.email}</p>
                  <p className="secondaryData">Telefone: {contact.phone}</p>
                </StyledDataSection>
                <StyledOptionsSection>
                  <StyledOptionsButton onClick={() => console.log("editar")}>
                    <AiFillEdit />
                  </StyledOptionsButton>
                  <StyledOptionsButton
                    onClick={() => handleOnDeleteClientContact(contact.id)}
                  >
                    <BsFillTrashFill />
                  </StyledOptionsButton>
                </StyledOptionsSection>
              </StyledClientSection>
            );
          })}
        </StyledClientContactsSection>
      </ReactModal>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Box>
              <Button onClick={() => history.push("/")}>Home</Button>
            </Box>
            <Box>
              <Button onClick={() => history.push("/formClient")}>Adicionar cliente</Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default ClientList;
