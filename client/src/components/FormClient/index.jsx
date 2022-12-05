import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { StyledForm, StyledInput, StyledButton, StyledMenu } from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillContacts, AiOutlineMenu } from "react-icons/ai";
import { ClientContext } from "../../context";

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

const FormClient = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const history = useHistory();

  const { handlePostAddNewClient } = useContext(ClientContext);

  const schema = yup.object({
    name: yup.string().required("Nome não pode ser vazio"),
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
    handlePostAddNewClient(data);
    reset();
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
        <h2>Cadastro de cliente</h2>
        <StyledInput
          helperText={errors.name?.message}
          error={errors.name?.message}
          placeholder="Nome Completo"
          {...register("name")}
        />
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
        <StyledButton>Cadastrar Cliente</StyledButton>
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

export default FormClient;
