import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  color: white;
  width: 100px;
  display: table;
  text-align: center;
`;

const IconContainer = styled.div`
  margin: auto;
  font-size: 36px;
  border-radius: 50%;
  color: #4d4d4d;
  background-color: white;
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  icon: IconDefinition;
  label?: string;
}

const RoundedIcon = ({ icon, label }: Props) => (
  <Container>
    <IconContainer>
      <FontAwesomeIcon icon={icon} />
    </IconContainer>
    <span>{label}</span>
  </Container>
);

export { RoundedIcon };
