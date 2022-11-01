import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  width: 350px;
  height: 260px;
  background: #020222;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  border-radius: 1rem;
  border: 2px solid transparent;
  cursor: pointer;

  transition: all 1s ease;

  &:hover {
    background: #2002;
    border: 2px solid #fff;
  }

  .icon-area {
  }
  .title-area {
    font-size: 1.5em;
    color: #eee;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .description-area {
    font-size: 1em;
    color: #999;
  }
`;
