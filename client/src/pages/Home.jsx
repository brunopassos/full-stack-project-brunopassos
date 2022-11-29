import React, { Component } from "react";
import { HomeContainer } from "./styles";
import FormClientContact from "../components/FormClientContact";

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <FormClientContact />
      </HomeContainer>
    );
  }
}

export default Home;
