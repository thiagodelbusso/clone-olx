import {
  faSuitcase,
  faThLarge,
  faComment,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import { Icon } from "../Icon";
import { ReactComponent as LogoOLX } from "../../assets/Svg/olx-logo.svg";

const HeaderContainer = styled.div`
  display: flex;
  padding: 20px 40px 20px 80px;
  > img {
    margin-top: 10px;
  }
`;

const ButtonContainer = styled.div`
  color: rgb(74, 74, 74);
  display: flex;
  position: absolute;
  right: 0px;
  width: 800px;
  align-items: center;
  > div {
    margin-right: 30px;
  }
`;

const Button = styled.button`
  width: 140px;
  height: 45px;
  border-radius: 80px;
  background-color: rgb(247, 131, 35);
  color: white;
  border: 0px;
  font-size: 16px;

  :hover {
    background-color: rgb(255, 166, 93);
  }
`;

const Header = () => (
  <HeaderContainer>
    <LogoOLX />

    <ButtonContainer>
      <Icon icon={faSuitcase} label="Plano Profissional" />
      <Icon icon={faThLarge} label="Meus Anúncios" />
      <Icon icon={faComment} label="Chat" />
      <Icon icon={faUser} label="Entrar" />
      <Button value="Anunciar">Anunciar</Button>
    </ButtonContainer>
  </HeaderContainer>
);

export { Header };
