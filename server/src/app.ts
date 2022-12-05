import express from "express"


import clientsRoutes from "./routes/clientes/clients.routes";
import contactsRoutes from "./routes/contacts/contacts.routes";

const app = express();
var cors = require('cors')

app.use(cors())

app.use(express.json());

app.use(clientsRoutes);
app.use(contactsRoutes);

const port = 4000;

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
