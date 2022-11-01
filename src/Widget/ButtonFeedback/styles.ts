import styled from "styled-components";

import { TbMessageCircle } from "react-icons/tb";

export const Container = styled.div`
  width: 50px;

  height: 50px;

  border-radius: 50%;

  background: #8257e6;

  position: fixed;
  z-index: 9999;
  bottom: 50px;
  right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  padding: 0 1rem;

  transition: all 1s ease;

  .icon {
  }
  .text {
    color: #fff;
  }

  &:hover {
    border-radius: 25%;
  }
`;

export const MessageFeedbackIcon = styled(TbMessageCircle)`
  font-size: 2rem;
  color: #fff;
`;
