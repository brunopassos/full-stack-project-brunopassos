import React, { Component } from "react";
import HomeMenu from "../components/HomeMenuComponent";
import { HomeContainer } from "./styles";

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <HomeMenu/>
      </HomeContainer>
    );
  }
}

export default Home;
