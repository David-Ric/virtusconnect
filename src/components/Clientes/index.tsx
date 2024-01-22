
import "../../styles/clientes.scss";
import Logo1 from '../../assets/frost.png'
import Logo2 from '../../assets/ibel.png'
import Logo3 from '../../assets/prime.png'
import Logo4 from '../../assets/tempero.png'

export default function Clientes() {


  return (
    <div className="container-web">
          <div className="tarja-titulo">
        <h1>Nossos Clientes</h1>
      </div> 
      <div className="container-cli">
      <img src={Logo1} alt="" className="logo-cli"/>
      <img src={Logo2} alt="" className="logo-cli"/>
      <img src={Logo3} alt="" className="logo-cli"/>
      <img src={Logo4} alt="" className="logo-cli"/>
      </div>
      

    </div>
  );
}
