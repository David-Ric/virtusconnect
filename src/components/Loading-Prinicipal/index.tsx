import React, { useState, useEffect } from "react";
import "../../styles/loading-home.scss";
import { ProgressBar } from "react-bootstrap";

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
        <div className="div-logo" />
        <ProgressBar animated now={progress} />
        <h3 className="text-span">Carregando...</h3>
      </div>
    </div>
  );
}
