import React from "react";

import { StyledForm, StyledInput, StyledButton, StyledSelect } from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillContacts } from "react-icons/ai";

const dbTest = [
    {
        name:"Selecione um Cliente",
        id: 0
    },
    {
        name: "teste1",
        id: 1
    },
    {
        name: "teste2",
        id: 2
    },
    {
        name: "teste3",
        id: 3
    },
    {
        name: "teste4",
        id: 4
    },
]

const FormClientContact = () => {
  const schema = yup.object({
    email: yup.string().required("Email não pode ser vazio").email("Digite um email válido"),
    phone: yup.string().required("Telefone não pode ser vazio").min(10, "O telefone deve ter no mínimo 10 digitos."),
    client: yup.string().required("Selecione uma opção")
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

  const verifyClientSelected = (data) => {
    if(data.client === "Selecione um Cliente"){
        console.log("Favor selecionar um cliente.")
    }else{
        onSubmit(data)
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit(verifyClientSelected)}>
      <AiFillContacts fontSize={60} color="#5F75B1"/>
      <h2>Cadastrar contato</h2>
      <StyledInput helperText={errors.email?.message} error={errors.email?.message} placeholder="Email" {...register("email")}/>
      <StyledInput helperText={errors.phone?.message} error={errors.phone?.message} placeholder="Telefone com DDD" {...register("phone")}/>
      <StyledSelect {...register("client")}>
        {dbTest.map((client) => {
            return <option value={client.name} key={client.id}>{client.name}</option>
        })}
      </StyledSelect>
      <StyledButton>Cadastrar Cliente</StyledButton>
    </StyledForm>
  );
};

export default FormClientContact;
