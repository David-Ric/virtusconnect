
import "../../styles/projetos.scss";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo1 from "../../assets/carrouss/ind01.png";
import Logo2 from "../../assets/carrouss/ind02.png";
import Logo3 from "../../assets/carrouss/ind03.png";


export default function CarrIndustria() {
  return (
    <div className="carroussel-ind">
  
      <div className="div-desck">
      <Carousel>
          <Carousel.Item className="divcaroussel">
            <img className="d-block imgCsa" src={Logo1} alt="Projeto 1" />
            <img className="d-block imgCsa" src={Logo2} alt="Projeto 2" />
            <img className="d-block imgCsa" src={Logo3} alt="Projeto 3" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="div-mobile">
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
        </Carousel>
      </div>
      
    </div>
  );
}
