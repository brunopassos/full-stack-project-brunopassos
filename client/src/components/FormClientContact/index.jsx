import React from "react";

import { StyledForm, StyledInput, StyledButton, StyledSelect } from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillContacts } from "react-icons/ai";
import { useContext } from "react";
import { ClientContext } from "../../context";


const FormClientContact = () => {
  const {clientId, handlePostCreateNewClientContact} = useContext(ClientContext);

  const schema = yup.object({
    email: yup.string().required("Email não pode ser vazio").email("Digite um email válido"),
    phone: yup.string().required("Telefone não pode ser vazio").min(10, "O telefone deve ter no mínimo 10 digitos."),
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
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <AiFillContacts fontSize={60} color="#5F75B1"/>
      <h2>Cadastrar contato</h2>
      <StyledInput helperText={errors.email?.message} error={errors.email?.message} placeholder="Email" {...register("email")}/>
      <StyledInput helperText={errors.phone?.message} error={errors.phone?.message} placeholder="Telefone com DDD" {...register("phone")}/>
      <StyledButton>Cadastrar novo contato</StyledButton>
    </StyledForm>
  );
};

export default FormClientContact;
