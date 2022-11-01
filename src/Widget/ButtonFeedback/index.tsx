import React, { useContext } from "react";

import * as C from "./styles";
import { WidgetContext } from "./../../contexts/WidgetContext/index";

const ButtonFeedback: React.FC = () => {
  const { wrapperWid } = useContext(WidgetContext);

  return (
    <C.Container onClick={wrapperWid}>
      <span className="icon">
        <C.MessageFeedbackIcon />
      </span>
    </C.Container>
  );
};

export default ButtonFeedback;
