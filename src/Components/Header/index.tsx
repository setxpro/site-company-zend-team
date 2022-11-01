import React from "react";

import * as C from "./styles";

interface PropsDisappearingHeader {
  disappearHeader: boolean;
}

const Header = ({ disappearHeader }: PropsDisappearingHeader) => {
  return (
    <C.Container disappear={disappearHeader}>
      <div>
        <img
          src="https://eltallerweb.com/themes/eltallerweb/img/service/zend.png"
          alt=""
        />
      </div>
      <C.Nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>

          <li>
            <a href="#services">Serviços</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
          <li>
            <a href="#clients">Clientes</a>
          </li>
        </ul>
      </C.Nav>
    </C.Container>
  );
};

export default Header;
