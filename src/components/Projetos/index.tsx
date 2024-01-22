import React from "react";
import "../../styles/projetos.scss";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo1 from "../../assets/banners/FROST.jpeg";
import Logo2 from "../../assets/banners/OBEL.jpeg";
import Logo3 from "../../assets/banners/PRIME.jpeg";
import Logo4 from "../../assets/banners/ALIMPERO.jpeg";

export default function Projetos() {
  return (
    <div className="container-web carroussel">
      <div className="tarja-titulo">
        <h1>Nossos Projetos</h1>
      </div>

      <div className="carrousel-cliente cliente-desck ">
        <Carousel>
          <Carousel.Item className="d-flex justify-content-between">
            <img className="d-block imgCsa" src={Logo1} alt="Projeto 1" />
            <img className="d-block imgCsa" src={Logo2} alt="Projeto 2" />
          </Carousel.Item>
          <Carousel.Item className="d-flex justify-content-between">
            <img className="d-block imgCsa" src={Logo3} alt="Projeto 3" />
            <img className="d-block imgCsa" src={Logo4} alt="Projeto 4" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="carrousel-cliente cliente-mobile">
        <Carousel>
          <Carousel.Item>
            <img className="d-block imgCsa" src={Logo1} alt="Projeto 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block imgCsa" src={Logo2} alt="Projeto 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block imgCsa" src={Logo3} alt="Projeto 3" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block imgCsa" src={Logo4} alt="Projeto 4" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
