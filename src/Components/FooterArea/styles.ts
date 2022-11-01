import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  padding-bottom: 1rem;
`;
export const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2rem;
  gap: 5px;

  padding: 0 1rem;
`;
export const Area = styled.div`
  width: 200px;

  display: flex;
  flex-direction: column;

  h4 {
    width: 100%;
    text-align: center;
    border-bottom: 2px solid #8888;
    color: #eee;
    padding: 0.5rem 0;
  }
`;
export const Info = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  a {
    color: #eee;
    text-decoration: none;
    text-align: center;

    background-image: linear-gradient(
      transparent 0%,
      transparent 90%,
      cyan 90%,
      cyan 100%
    );

    background-repeat: no-repeat;
    background-size: 0% 100%;
    background-position-x: left;

    transition: background-size 300ms;

    :hover {
      background-size: 100% 100%;
      background-position-x: left;
    }
  }

  button {
    margin-right: 10px;
  }
`;
