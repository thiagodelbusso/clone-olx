import {
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
import { RoundedIcon } from "../Icon/RoundedIcon";
import { MainSearch } from "./MainSearch";
import { Container, ShortcutIconsContainer } from "./styles";

const Main = () => (
  <Container>
    <MainSearch />
    <ShortcutIconsContainer>
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
    </ShortcutIconsContainer>
  </Container>
);

export { Main };
