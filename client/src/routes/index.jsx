import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import ClientList from "../components/ClientList";
import FormClient from "../components/FormClient";
import FormClientContact from "../components/FormClientContact";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/list">
        <ClientList />
      </Route>

      <Route exact path="/formClient">
        <FormClient />
      </Route>

      <Route exact path="/formClientContact">
        <FormClientContact />
      </Route>
    </Switch>
  );
}

export default Routes;
