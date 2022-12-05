import React, { useRef } from "react";

import { StyledForm, StyledInput, StyledButton, StyledSelect, StyledMenu } from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillContacts, AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";
import { ClientContext } from "../../context";
import { useHistory } from "react-router-dom";

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

const FormClientContact = () => {
  const { clientId, handlePostCreateNewClientContact } =
    useContext(ClientContext);

  const history = useHistory();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const schema = yup.object({
    email: yup
      .string()
      .required("Email não pode ser vazio")
      .email("Digite um email válido"),
    phone: yup
      .string()
      .required("Telefone não pode ser vazio")
      .min(10, "O telefone deve ter no mínimo 10 digitos."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    data.clientId = clientId;
    handlePostCreateNewClientContact(data);
  };

  return (
    <>
    <StyledMenu className="menuIcon">
        <AiOutlineMenu
          fontSize={40}
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
        />
      </StyledMenu>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <AiFillContacts fontSize={60} color="#5F75B1" />
        <h2>Cadastrar contato</h2>
        <StyledInput
          helperText={errors.email?.message}
          error={errors.email?.message}
          placeholder="Email"
          {...register("email")}
        />
        <StyledInput
          helperText={errors.phone?.message}
          error={errors.phone?.message}
          placeholder="Telefone com DDD"
          {...register("phone")}
        />
        <StyledButton>Cadastrar novo contato</StyledButton>
      </StyledForm>
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
              <Button onClick={() => history.push("/formClient")}>
                Adicionar cliente
              </Button>
            </Box>
            <Box>
              <Button onClick={() => history.push("/list")}>
                Listar Clientes
              </Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default FormClientContact;
