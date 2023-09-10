import './App.css';

import { Comment } from './components';

import car from "./assets/car.png";
import driver from "./assets/driver.png";
import user from "./assets/user.png";
import phone from "./assets/phone.svg";
import shield from "./assets/shield.svg";

function App() {
  return (
    <main id="container">
      <header id="header"></header>
      <h2 id="title">Encontre <span id="highlight">Fábio</span> no local de partida</h2>
      <p id="subtitle">Chega em 3 minutos (800 metros)</p>
      <div id="about">
        <div id="profile">
          <div id="picture">
            <img src={ driver } title="Fábio" alt="Fábio" />
            <span id="rate">★ 5.0</span>
          </div>
          <h4 id="driver-name">Fábio D.</h4>
        </div>
        <img id="car" src={ car } title="Honda Civic Roxo" alt="Honda Civic Roxo" />
        <div>
          <h3 id="plate">BCD0D19</h3>
          <p id="car-name">Honda Civic Roxo</p>
        </div>
      </div>
      <form id="form">
        <input id="message-field" type="text" placeholder="Enviar mensagem para Fábio..."></input>
        <button id="send-message" type="submit">Publicar</button>
        <button className="contact"><img src={ phone } title="Ligar para Fábio" alt="Ligar para Fábio" /></button>
        <button className="contact"><img src={ shield } title="Fazer alguma coisa" alt="Fazer alguma coisa" /></button>
      </form>
      <Comment user="Vanessa" pic={ user } msg="Boris estou no local já lhe esperando. Estou com camisa azul e calça jeans." />
      <Comment user="Fábio" pic={ driver } msg="Acabei de lhe ver. Vou estacionar o carro próximo." />
    </main>
  );
}

export default App;