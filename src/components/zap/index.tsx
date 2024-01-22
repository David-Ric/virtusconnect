

export default function Clientes() {
  const numeroWhatsApp = "+558592872397";

  const enviarMensagemWhatsApp = () => {
    const mensagem = "Olá, estou entrando em contato!";
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensagem
    )}`;
    window.open(linkWhatsApp, "_blank");
  };

  return <div className="zap" onClick={enviarMensagemWhatsApp}></div>;
}
