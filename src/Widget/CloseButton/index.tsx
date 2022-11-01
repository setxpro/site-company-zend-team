import React from "react";
import * as C from "./styles";

interface Props {
  onClick: () => void;
}

const CloseButton = ({ onClick }: Props) => {
  return (
    <C.ButtonCloseArea onClick={onClick}>
      <C.CloseButtonIcon />
    </C.ButtonCloseArea>
  );
};

export default CloseButton;
