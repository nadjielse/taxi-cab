import './App.css';

import car from "./assets/car.png";
import driver from "./assets/driver.png";
import user from "./assets/user.png";
import phone from "./assets/phone.svg";
import shield from "./assets/shield.svg";
import trashcan from "./assets/trash-can.svg";

function App() {
  return (
    <main id="container">
      <header id="header"></header>
      <h2 id="title">Encontre <span id="highlight">Fábio</span> no local de partida</h2>
      <p id="subtitle">Chega em 3 minutos (800 metros)</p>
      <div id="about">
        <div id="profile">
          <div id="picture">
            <img src={ driver } title="" alt="" />
            <span id="rate">★ 5.0</span>
          </div>
          <h4 id="driver-name">Fábio D.</h4>
        </div>
        <img id="car" src={ car } title="" alt="" />
        <div>
          <h3 id="plate">BCD0D19</h3>
          <p id="car-name">Honda Civic Roxo</p>
        </div>
      </div>
      <form id="form" action="" method="">
        <input id="message-field" type="text" placeholder="Enviar mensagem para Fábio..."></input>
        <button id="send-message" type="submit">Publicar</button>
        <button className="contact"><img src={ phone } title="" alt="" /></button>
        <button className="contact"><img src={ shield } title="" alt="" /></button>
      </form>
      <div className="comment">
        <img className="user-pic" src={ user } title="" alt="" />
        <p>Boris estou no local já lhe esperando. Estou com camisa azul e calça jeans.</p>
        <button className="trash"><img src={ trashcan } title="" alt="" /></button>
      </div>
      <div className="comment">
        <img className="user-pic" src={ driver } title="" alt="" />
        <p>Acabei de lhe ver. Vou estacionar o carro próximo.</p>
        <button className="trash"><img src={ trashcan } title="" alt="" /></button>
      </div>
    </main>
  );
}

export default App;