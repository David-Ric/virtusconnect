import React, { useState, useEffect } from "react";
import Loading_Principal from "../../components/Loading-Prinicipal";
import "../../styles/global.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Digitalizamos from "../../components/Digitalizamos";
import ContanierVideo from "../../components/Contanier-video";
import Projetos from "../../components/Projetos";
import Clientes from "../../components/Clientes";
import Zap from "../../components/zap";

export default function Home() {
  const [loadingVisible, setLoadingVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoadingVisible(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {loadingVisible && <Loading_Principal />}
      <Navbar />
      <Digitalizamos />
      <ContanierVideo />
      <Clientes/>
      <Projetos/>
      <Zap/>
      <Footer />
    </>
  );
}
