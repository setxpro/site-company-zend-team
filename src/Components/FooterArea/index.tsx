import React from "react";

import * as C from "./styles";

const FooterArea = () => {
  return (
    <C.Container>
      <C.Content>
        <C.Area>
          <h4>Contato</h4>
          <C.Info>
            <a href="tel:21966077757">Celular</a>
            <a href="tel:2134845329">Telefone</a>
            <a href="malito:developerseven77@gmail.com">E-mail</a>
            <a href="https://www.google.com.br/maps/place/Arte+dos+sonhos/@-22.9305842,-43.5598835,17z/data=!3m1!4b1!4m5!3m4!1s0x9be715695e5a8d:0x6dba1945d92b308b!8m2!3d-22.9305811!4d-43.5576878">
              Endereço
            </a>
          </C.Info>
        </C.Area>
        <C.Area>
          <h4>Habilidades</h4>
          <C.Info>
            <a href="/">Segurança de Dados</a>
            <a href="/">Desenvolvimento Ágil</a>
            <a href="/">Prototipação</a>
            <a href="/">Clean Code</a>
          </C.Info>
        </C.Area>
        <C.Area>
          <h4>Social</h4>
          <C.Info>
            <a href="/">WhatsApp</a>
            <a href="/">Instagram</a>
            <a href="/">Facebook</a>
            <a href="/">Linkedin</a>
            <a href="/">Github</a>
          </C.Info>
        </C.Area>
        <C.Area>
          <h4>Tecnologias</h4>
          <C.Info>
            <a href="/">ReactJS</a>
            <a href="/">Typescript</a>
            <a href="/">NodeJS</a>
            <a href="/">MongoDB</a>
          </C.Info>
        </C.Area>
      </C.Content>
    </C.Container>
  );
};

export default FooterArea;
