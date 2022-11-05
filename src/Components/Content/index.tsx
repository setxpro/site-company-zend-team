import { useState } from "react";
import * as C from "./styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import CloudImage from "../../image/Cloud.gif";
import { Carousel } from "react-responsive-carousel";
import CardService from "../CardService";
import CarousselItems from "../CarousselItems";

import pageTesla from "../../image/tesla.png";
import imc from "../../image/imc.png";
import ediarista from "../../image/ediarista.png";
import gestao from "../../image/gestao.png";
import sales from "../../image/sales.png";
import ButtonFeedback from "../../Widget/ButtonFeedback";
import { WidgetForm } from "../../Widget/WidgetForm";
import { WidGetProvider } from "../../contexts/WidgetContext";
import FormContact from "../FormContact";

import CallImage from "../../image/Cal.gif";
import { MessagesClientProvider } from "../../contexts/MessagesClientContext/MessagesClientContext";

interface PropsDisappearingHeader {
  disappearHeader: boolean;
}

const Content = ({ disappearHeader }: PropsDisappearingHeader) => {
  const [projects] = useState([
    {
      id: 1,
      link: "https://darling-sprinkles-604435.netlify.app/",
      legend: "Ver em produção",
      getImage: pageTesla,
    },
    {
      id: 2,
      link: "https://statuesque-stardust-c88c21.netlify.app/",
      legend: "Ver em produção",
      getImage: imc,
    },
    {
      id: 3,
      link: "https://ediaristas-frhrircz1-setxpro.vercel.app/",
      legend: "Ver em produção",
      getImage: ediarista,
    },
    {
      id: 4,
      link: "https://fanciful-queijadas-fdea89.netlify.app/",
      legend: "Ver em produção",
      getImage: gestao,
    },
    {
      id: 5,
      link: "https://patrick-dsvendas.netlify.app/",
      legend: "Ver em produção",
      getImage: sales,
    },
  ]);

  function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach((reveal) => {
      let windowHeight = window.innerHeight;
      let elementTop = reveal.getBoundingClientRect().top;
      let elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add("active");
      } else {
        reveal.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", reveal);

  return (
    <C.Container>
      <C.Section id="home">
        <div className="capa">
          <h1>Soluções de software sob medida</h1>
          <h3>
            Ajudamos nossos clientes a inovar, se diferenciar e crescer. Com
            experiência em diversas tecnologias, construímos aplicações Web e
            Mobile conforme necessidades específicas para cada negócio.
          </h3>
        </div>
      </C.Section>
      {disappearHeader ? (
        <WidGetProvider>
          <C.ContentWidget>
            <WidgetForm />
            <ButtonFeedback />
          </C.ContentWidget>
        </WidGetProvider>
      ) : (
        ""
      )}

      <C.Section id="about">
        <div className="reveal active">
          <div className="title-area">
            <h2>Sobre Nós</h2>
          </div>
          <C.Content>
            <p>
              A Zend Team fornece serviços especializados de desenvolvimento de
              software, Sites, Aplicativos, incluindo software incorporado e
              bancos de dados integrados de aplicativos multiplataforma.
            </p>
            <div className="area">
              <img src={CloudImage} alt="cloud" />
            </div>
          </C.Content>
        </div>
      </C.Section>
      <C.Section id="services">
        <div className="reveal active">
          <div className="title-area">
            <h2>Serviços</h2>
          </div>
          <C.ContentServices>
            <CardService />
          </C.ContentServices>
        </div>
      </C.Section>
      <C.Section id="projects">
        <div className="reveal active">
          <div className="title-area">
            <h2>Projetos</h2>
          </div>
          <C.ContentProjects>
            <Carousel
              autoPlay={false}
              preventMovementUntilSwipeScrollTolerance={true}
              emulateTouch={false}
              // centerMode={false}  // false ever
              autoFocus={true}
              showArrows={true}
              showStatus={false} // false ever
              showIndicators={true} // obs
              showThumbs={false} // false ever
              stopOnHover={true}
              swipeable={true}
              useKeyboardArrows={false}
            >
              {projects.map((item, index) => (
                <CarousselItems item={item} key={index} />
              ))}
            </Carousel>
          </C.ContentProjects>
        </div>
      </C.Section>

      <C.Section id="contact">
        <div className="reveal active">
          <div className="title-area">
            <h2>Contato</h2>
          </div>
          <MessagesClientProvider>
            <C.ContentContact>
              <FormContact />
              <img src={CallImage} alt="" />
            </C.ContentContact>
          </MessagesClientProvider>
        </div>
      </C.Section>
      <C.Section id="clients">
        <div className="reveal active">
          <div className="title-area">
            <h2>Alguns de nossos clientes!</h2>
          </div>
          <div>
            <h3>Em Construção...</h3>
          </div>
        </div>
      </C.Section>
      <C.Aside>
        <div className="reveal active aside">
          <div className="icon">
            <C.Quotes />
          </div>
          <div className="text">
            Buscamos sempre a melhor solução para nossos clientes, transformando
            idéias em produtos reais.
          </div>
          <div className="company">Zend Team - Desenvolvimento Web</div>
        </div>
      </C.Aside>
    </C.Container>
  );
};

export default Content;
