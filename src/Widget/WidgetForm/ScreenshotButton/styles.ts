import styled from "styled-components";

import { AiOutlineCamera } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

export const CameraIcon = styled(AiOutlineCamera)`
  color: rgba(244, 244, 245, 1);
  font-size: 2rem;

  position: absolute;
  margin-top: -15px;
  margin-left: -15px;
`;
export const ButtonContainer = styled.button`
  padding: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  background: #27272a;
  border-color: transparent;
  border-radius: 4px;
  cursor: pointer;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  &:hover {
    background: rgba(63, 63, 70, 1);
  }
`;

export const ButtonScreenshot = styled.button<{ screenshot: string | null }>`
  padding: 0.25rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 4px;
  border-color: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  background: rgba(39, 39, 42, 1);
  cursor: pointer;
  background-image: ${(props) =>
    props.screenshot && `url(${props.screenshot})`};
  background-position: center;
  background-size: 100px;
  &:hover {
    color: rgba(244, 244, 245, 1);
  }
`;

export const TrashIcon = styled(BsTrash)`
  font-size: 1.5rem;
  color: rgba(161, 161, 170, 1);
`;
