import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  padding: 2rem;
  gap: 8px;
  width: 100%;
  button {
    background: #18181b;
    border-radius: 5px;
    padding: 1.25rem;
    width: 6rem;
    flex: 1;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border: 2px solid transparent;
    cursor: pointer;
    span {
      color: #f4f4f5;
    }
    transition: all 1s ease;
    &:hover {
      border: 2px solid #54eaba;
    }
    &:focus {
      border: 2px solid #54eaba;
      outline: none;
    }
  }
`;

export const Container = styled.div`
  text-align: center;
`;
