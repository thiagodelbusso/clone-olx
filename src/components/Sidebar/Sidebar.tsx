import React from "react";

import { Container, SidebarLink } from "./styles";

const Sidebar = () => {
  return (
    <Container>
      <SidebarLink to="/">Início</SidebarLink>
      <SidebarLink to="/contact">Contato</SidebarLink>
    </Container>
  );
};

export { Sidebar };
