import styled from "styled-components";

export const Container = styled.span`
  width: 25px;
  height: 25px;
  border: 2px dashed #fff;
  border-radius: 50%;
  position: absolute;
  margin-top: -10px;
  margin-left: -10px;
  animation: rot 1s ease;
  @keyframes rot {
    0% {
      transform: rotate(190deg);
    }
  }
`;
