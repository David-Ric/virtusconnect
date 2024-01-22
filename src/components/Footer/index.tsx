import React from "react";
import "../../styles/footer.scss";

export default function Footer() {
  const obterAnoAtual = () => {
    return new Date().getFullYear();
  };

  return (
    <footer>
      <h1>Direitos Reservados © {obterAnoAtual()} Vurtis Connect. Todos os direitos são reservados.</h1>
    </footer>
  );
}
