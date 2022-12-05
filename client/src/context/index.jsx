import React, { createContext, useState } from "react";
import { Api } from "../services/api";

export const ClientContext = createContext({});

function ClientProvider({ children }) {
  const [clientList, setClientList] = useState([]);
  const [clientToEdit, setClientToEdit] = useState({});
  const [clientId, setClientId] = useState("");
  const [clientContactsList, setClientContactsList] = useState([]);

  function handleGetClientsList() {
    Api.get("/clients")
      .then((res) => setClientList(res.data))
      .catch((err) => console.log(err));
  }

  function handlePostAddNewClient(data) {
    Api.post("/clients/register", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  function handlePostCreateNewClientContact(data) {
    Api.post("/contacts/register", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  function handleDeleteClient(id) {
    Api.delete(`/clients/${id}`)
      .then((_) => handleGetClientsList())
      .catch((err) => console.log(err));
  }

  function handlePatchEditClient(data, id) {
    Api.patch(`/clients/${id}`, data)
      .then((_) => handleGetClientsList())
      .catch((err) => console.log(err));
  }

  function handleGetClientContactsList(id) {
    Api.get(`/contacts/client/${id}`)
      .then((res) => setClientContactsList(res.data))
      .catch((err) => console.log(err));
  }

  function handleDeleteClientContact(id, clientId) {
    Api.delete(`/contacts/${id}`)
      .then((_) => handleGetClientContactsList(clientId))
      .catch((err) => console.log(err));
  }

  return (
    <ClientContext.Provider
      value={{
        clientList,
        setClientList,
        handleGetClientsList,
        handlePostAddNewClient,
        handleDeleteClient,
        clientId,
        setClientId,
        handlePostCreateNewClientContact,
        clientToEdit,
        setClientToEdit,
        handlePatchEditClient,
        handleGetClientContactsList,
        clientContactsList,
        handleDeleteClientContact,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
}

export default ClientProvider;
