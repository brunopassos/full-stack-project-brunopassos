import React, { Component } from "react";
import { HomeContainer } from "./styles";
import ClientList from "../components/ClientList";

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <ClientList />
      </HomeContainer>
    );
  }
}

export default Home;
