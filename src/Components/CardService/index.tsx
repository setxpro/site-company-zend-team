import React, { memo } from "react";

import * as C from "./styles";
import { serviceDB } from "./../../Mock/ServiceDb";

const CardService = () => {
  return (
    <React.Fragment>
      {serviceDB.map((item, index) => (
        <C.Container key={index}>
          <div className="icon-area">{item.icon}</div>
          <div className="content">
            <div className="title-area">{item.title}</div>
            <div className="description-area">{item.description}</div>
          </div>
        </C.Container>
      ))}
    </React.Fragment>
  );
};

export default memo(CardService);
