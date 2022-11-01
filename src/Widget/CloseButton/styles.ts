import styled from "styled-components";

import { IoIosClose } from "react-icons/io";

export const ButtonCloseArea = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: transparent;
  border: 0;
`;

export const CloseButtonIcon = styled(IoIosClose)`
  font-size: 2rem;
  cursor: pointer;
  color: #54eaba;
  &:hover {
    color: #f00;
  }
`;

export const Container = styled.div``;
