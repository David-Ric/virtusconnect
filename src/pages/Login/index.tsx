import { useState } from "react";
import "../../styles/login.scss";
import LogoLogin from "../../assets/logo-virtus.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function Login() {
  const [cadastrar, setCadastrar] = useState(false);

  const toggleCadastro = () => {
    setCadastrar(!cadastrar);
  };

  return (
    <div className="container-login">
      <div className="banner-login"></div>
      {cadastrar ? (
        // Formulário de Registro
        <form action="" className="form-login">
          <img src={LogoLogin} alt="" />
          <h1 className="text-login">Registre-se</h1>
          <div className="div-input-login">
            <h5>Usuário:</h5>
            <input id="user" type="text" />
          </div>
          <div className="div-input-login">
            <h5>Email:</h5>
            <input id="email" type="text" />
          </div>
          <div className="div-input-login">
            <h5>Senha:</h5>
            <input id="password" type="password" />
          </div>
          <div className="div-input-login">
            <h5>Confirmação de senha:</h5>
            <input id="password" type="password" />
          </div>
          <button type="submit" className="btn-login">
            cadastrar
          </button>

          <Button
            type="button"
            className="btn-log"
            variant="outline-primary"
            onClick={toggleCadastro}
          >
            Já tenho uma conta
          </Button>
          <Link className="link-home d-flex" to="/">
            <FaHome fontSize={20} />
            <h6>Home</h6>
          </Link>
        </form>
      ) : (
        // Formulário de Login
        <form action="" className="form-login">
          <img src={LogoLogin} alt="" />
          <h1 className="text-login">Login</h1>
          <div className="div-input-login">
            <h5>Usuário:</h5>
            <input id="user" type="text" />
          </div>
          <div className="div-input-login">
            <h5>Senha:</h5>
            <input id="password" type="password" />
          </div>
          <button type="submit" className="btn-login">
            entrar
          </button>

          <Button
            type="button"
            className="btn-log"
            variant="outline-primary"
            onClick={toggleCadastro}
          >
            Cadastre-se
          </Button>
          <Link className="link-home d-flex" to="/">
            <FaHome fontSize={20} />
            <h6>Home</h6>
          </Link>
        </form>
      )}
    </div>
  );
}
