import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../Icon";

import {
  SearchContainer,
  StyledInputText,
  Separator,
  StyledSearchButton,
} from "./styles";

const MainSearch = () => (
  <SearchContainer>
    <StyledInputText placeholder="Estou procurando por.." />
    <Separator />
    <StyledSearchButton>
      <Icon icon={faSearch} pointer hoverColor="white" />
    </StyledSearchButton>
  </SearchContainer>
);

export { MainSearch };
