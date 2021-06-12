import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { Header } from "./components";
import { GlobalStyle } from "./global-style";

const App = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  </>
);

export { App };
