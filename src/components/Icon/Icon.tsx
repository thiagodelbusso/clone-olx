import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Container = styled.div<{ hoverColor?: string; pointer?: boolean }>`
  ${(p) => (p.pointer ? "cursor: pointer; " : "")}

  font-size: 18px;
  > span {
    margin-left: 10px;
  }
  :hover {
    color: ${(p) => p.hoverColor ?? "#9027b0"};
  }
`;

interface Props {
  icon: IconDefinition;
  pointer?: boolean;
  label?: string;
  hoverColor?: string;
}

const Icon = ({ icon, label, hoverColor, pointer = false }: Props) => (
  <Container hoverColor={hoverColor} pointer>
    <FontAwesomeIcon icon={icon} />
    <span>{label}</span>
  </Container>
);

export { Icon };
