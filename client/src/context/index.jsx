import React, { createContext } from "react";

export const ClientContext = createContext({});

function ClientProvider({ children }) {

    

  return (
    <ClientContext.Provider value={{  }}>
      {children}
    </ClientContext.Provider>
  );
}

export default ClientProvider;
