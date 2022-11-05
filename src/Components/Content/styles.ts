import styled from "styled-components";

import { RiDoubleQuotesR } from "react-icons/ri";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Section = styled.section`
  .capa {
    background-image: url("https://images.pling.com/img/00/00/66/53/17/1845356/light-sky-stars-background-design-theme-hd-wallpapers-wallpaper-1920x1080-10wallpaper.com.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    justify-content: center;

    h1,
    h3 {
      color: #eee;
    }

    h1 {
      font-size: 4em;
      font-weight: 400;
    }

    h3 {
      width: 800px;
      font-weight: 400;
      font-size: 1.5em;
    }
  }

  height: 100vh;
  background-color: #242b3d;

  .title-area {
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 2.5em;
      border-bottom: 2px solid cyan;
      color: #eee;
    }
  }

  .reveal {
    position: relative;
    transform: translateY(144px);
    opacity: 0;
    transition: 1s all ease;
  }
  .active {
    transform: translateY(0);
    opacity: 1;
  }

  :target {
    scroll-margin-top: 75px;
  }
`;

export const Content = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  p {
    font-size: 2em;
    flex: 1;
    color: #eee;
  }

  .area {
    width: 500px;
    height: 400px;
    background: red;
  }
`;

export const ContentServices = styled.div`
  padding: 0 1rem;

  height: calc(100vh - 100px);

  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const ContentProjects = styled.div`
  padding: 0 1rem;

  .content {
    img {
      height: calc(100vh - 100px);
      border-radius: 2rem;
    }

    .legend {
      background: #fff;
      color: #333;
      font-size: 1rem;
    }
  }
`;
export const ContentWidget = styled.div`
  position: fixed;
  bottom: 20%;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  z-index: 999;
  user-select: none;
`;
export const ContentContact = styled.div`
  height: calc(100vh - 100px);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;
`;

export const Aside = styled.div`
  height: 300px;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 1rem;
  .aside {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    .icon {
      text-align: center;
    }
    .text {
      font-size: 1rem;
      color: #fff;
    }
    .company {
      color: cyan;
      font-size: 1rem;
      text-align: center;
    }
  }
`;

export const Quotes = styled(RiDoubleQuotesR)`
  font-size: 4em;
  color: cyan;
`;
