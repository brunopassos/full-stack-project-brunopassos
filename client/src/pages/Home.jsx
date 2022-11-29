import React, { Component } from "react";
import { HomeContainer } from "./styles";
import FormClient from "../components/FormClient";

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <FormClient />
      </HomeContainer>
    );
  }
}

export default Home;
