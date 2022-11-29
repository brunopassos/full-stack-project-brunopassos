import React from "react";

import { StyledForm, StyledInput, StyledButton } from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillContacts } from "react-icons/ai";

const FormClient = () => {
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

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <AiFillContacts fontSize={60} color="#5F75B1"/>
      <h2>Cadastro de cliente</h2>
      <StyledInput helperText={errors.name?.message} error={errors.name?.message} placeholder="Nome Completo" {...register("name")}/>
      <StyledInput helperText={errors.email?.message} error={errors.email?.message} placeholder="Email" {...register("email")}/>
      <StyledInput helperText={errors.phone?.message} error={errors.phone?.message} placeholder="Telefone com DDD" {...register("phone")}/>
      <StyledButton>Cadastrar Cliente</StyledButton>
    </StyledForm>
  );
};

export default FormClient;
