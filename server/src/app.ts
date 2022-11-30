import express from "express"

import clientsRoutes from "./routes/clientes/clients.routes";

const app = express();

app.use(express.json());

app.use(clientsRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
