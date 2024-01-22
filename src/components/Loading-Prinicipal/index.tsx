import { useState, useEffect } from "react";
import "../../styles/loading-home.scss";
import { ProgressBar } from "react-bootstrap";
import logo from '../../assets/log-virtus-loading.png'

export default function Loading_Principal() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 1 : 100
      );
    }, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container-load">
      <div>
        
        <img src={logo} alt="" className="div-logo"/>
        <ProgressBar animated now={progress} />
        <h3 className="text-span">Carregando...</h3>
      </div>
    </div>
  );
}
