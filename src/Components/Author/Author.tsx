import React from "react";

import * as C from "./styles";

const Author: React.FC = () => {
  return (
    <C.Container>
      <span>
        © 2022 Desenvolvido por{" "}
        <a href="https://github.com/Zend-Team">Zend Tem</a>
      </span>
    </C.Container>
  );
};

export default Author;
