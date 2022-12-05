import {
  AiFillContacts,
  AiFillPlusCircle,
  AiOutlineOrderedList,
} from "react-icons/ai";
import { StyledContainer } from "./styles";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { ClientContext } from "../../context";

const HomeMenu = () => {
  const history = useHistory();
  const {handleGetClientsList} = useContext(ClientContext);

  function handleListClients(){
    handleGetClientsList()
    history.push("/list")
  }

  return (
    <StyledContainer>
      <div className="divText">
        <AiFillContacts fontSize={150} color="#5F75B1" />
        <h2>Bem vindo(a) ao Schedule</h2>
      </div>
      <div className="divIcons">
        <div onClick={() => history.push("/formClient")} className="icons">
          <AiFillPlusCircle fontSize={60} color="#5F75B1" />
          Adicionar cliente
        </div>
        <div onClick={() => handleListClients()} className="icons">
          <AiOutlineOrderedList fontSize={60} color="#5F75B1" />
          Listar clientes
        </div>
      </div>
    </StyledContainer>
  );
};

export default HomeMenu;
