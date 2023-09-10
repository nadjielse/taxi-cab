import './style.css';

import trashcan from "../../assets/trash-can.svg";

export function Comment({ user, pic, msg }) {
  return (
    <div className="comment">
      <img className="user-pic" src={ pic } title={ user } alt={ user } />
      <p>{ msg }</p>
      <button className="trash"><img src={ trashcan } title="Apagar mensagem" alt="Apagar mensagem" /></button>
    </div>
  );
}