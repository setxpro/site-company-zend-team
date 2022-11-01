import styled from "styled-components";

export const Container = styled.div``;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 0;
  width: 304px;
  span {
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem /* 28px */;
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: #fff;
  }
  button {
    padding: 0.5rem 1.5rem;
    background-color: rgba(130, 87, 230, 1);
    border-radius: 4px;
    border-color: transparent;
    font-size: 0.875rem;
    line-height: 1.25rem;
    cursor: pointer;
    &:hover {
      background: rgba(63, 63, 70, 1);
    }
    &:focus {
      border-color: rgba(130, 87, 230, 1);
    }
  }
`;
