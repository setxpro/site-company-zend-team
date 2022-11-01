import styled from "styled-components";

export const Container = styled.div<{ openWid: boolean }>`
  background-color: #0d1117;
  padding: 1rem;
  position: relative;
  margin-bottom: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 5px #0d1117;
  width: calc(100vw-2rem);

  display: ${(props) => (props.openWid ? "inline" : "none")};

  header {
    span {
      color: #eee;
    }
  }
  footer {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    a {
      text-align: center;
      text-decoration: underline;
      text-underline-offset: 4px;
      color: #999;
      font-size: 12px;
    }
  }
`;
