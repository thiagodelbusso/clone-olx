import styled from "styled-components";

const Container = styled.div`
  background-color: #6e0ad6;
  width: 100%;
  height: 300px;
  padding: 30px;
`;

const ShortcutIconsContainer = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  height: 70px;
  width: 90%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
`;

const SearchContainer = styled.div`
  background-color: white;
  margin: 0 auto;
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
  border-left: 3px solid #e7e7e7;
  background-color: white;
`;

export {
  Container,
  SearchContainer,
  Separator,
  ShortcutIconsContainer,
  StyledInputText,
  StyledSearchButton,
};
