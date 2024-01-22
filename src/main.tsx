// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./router/Routes";
// import './styles/global.scss';

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./router/Routes";
import "./styles/global.scss";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/virtusconnect/service-worker.js")
    .then((registration) => {
      console.log("Service Worker registrado com sucesso:", registration);
    })
    .catch((error) => {
      console.log("Erro ao registrar o Service Worker:", error);
    });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
