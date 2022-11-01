import React, { useState, useEffect } from "react";
import Content from "./Components/Content";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { ToastContainer } from "react-toastify";
import FooterArea from "./Components/FooterArea";
import Author from "./Components/Author/Author";
const App: React.FC = () => {
  const [disappearHeader, setDisappearHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 2) {
        setDisappearHeader(true);
      } else {
        setDisappearHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <Main>
      <ToastContainer />
      <Header disappearHeader={disappearHeader} />
      <Content />
      <FooterArea />
      <Author />
    </Main>
  );
};

export default App;
