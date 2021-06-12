import styled from "styled-components";
import {
  faSearch,
  faHouseUser,
  faCar,
  faBed,
  faPhone,
  faUser,
  faTools,
  faMusic,
  faBasketballBall,
  faTshirt,
  faTractor,
  faThLarge,
} from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../Icon";
import { RoundedIcon } from "../Icon/RoundedIcon";

const Container = styled.div`
  background-color: #6e0ad6;
  width: 100%;
  height: 300px;
  padding-top: 40px;
  padding-left: 120px;
`;

const SearchContainer = styled.div`
  background-color: white;
  height: 70px;
  width: 90%;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

const StyledInputText = styled.input`
  margin-left: 20px;
  font-size: x-large;
  width: 100%;
  border: none;
  ::placeholder {
    color: #969696;
  }
  :focus {
    outline: none;
  }
`;

const StyledSearchButton = styled.button`
  font-size: xx-large;
  width: 80px;
  height: 100%;
  border: none;
  background-color: white;
  color: #9027b0;
  border-radius: 5px;
  :hover {
    background-color: #9027b0;
    color: white;
    border: 1px solid white;
  }
`;
const Separator = styled.div`
  height: 100%;
  border-left: 3px solid #cccccc;
  background-color: white;
`;

const Rename = styled.div`
  display: flex;
  width: 85%;
  justify-content: center;
  margin-top: 30px;
`;

const Main = () => (
  <Container>
    <SearchContainer>
      <StyledInputText placeholder="Estou procurando por..." />
      <Separator />
      <StyledSearchButton>
        <Icon icon={faSearch} pointer hoverColor="white" />
      </StyledSearchButton>
    </SearchContainer>

    <Rename>
      <RoundedIcon icon={faHouseUser} label="Imóveis" />
      <RoundedIcon icon={faCar} label="Autos e peças" />
      <RoundedIcon icon={faBed} label="Para sua casa" />
      <RoundedIcon icon={faPhone} label="Eletrônicos e celulares" />
      <RoundedIcon icon={faUser} label="Vagas de emprego" />
      <RoundedIcon icon={faTools} label="Serviços" />
      <RoundedIcon icon={faMusic} label="Músicas e hobbies" />
      <RoundedIcon icon={faBasketballBall} label="Esportes e lazer" />
      <RoundedIcon icon={faTshirt} label="Moda e beleza" />
      <RoundedIcon icon={faTractor} label="Agro e indústria" />
      <RoundedIcon icon={faThLarge} label="Todas as categorias" />
    </Rename>
  </Container>
);

export { Main };
