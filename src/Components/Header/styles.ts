import styled from "styled-components";

export const Container = styled.div<{ disappear: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  height: 75px;
  transition: all 0.5s ease;
  background: ${(props) => (props.disappear ? "#8257E6" : "transparent")};

  position: fixed;
  top: 0;
  width: 100%;

  z-index: 999;

  > div {
    flex: 1;
    img {
      width: 200px;
      height: 70px;
    }
  }
`;
export const Nav = styled.nav`
  flex: 1;
  ul {
    display: flex;
    gap: 1rem;
    li {
      list-style: none;
      a {
        text-decoration: none;
        font-size: 1.2rem;
        color: #eee;
      }

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
  }
`;
