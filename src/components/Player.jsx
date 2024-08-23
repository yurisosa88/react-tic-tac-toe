import { useState } from "react";

export default function Player({initialName,symbol,isActive,onChangeName}) {
  const [playerName,setPlayerName] = useState(initialName);
  const [isEditing,setIsEditing] = useState(false);

  let field = <span className="player-name">{playerName}</span>;

  const handleEdit = () => {
    //setIsEditing(!isEditing);
    setIsEditing( prevState => !prevState );
    if(isEditing){
      onChangeName(symbol,playerName);
    }
  }

  const handlePlayerName = (event) => {
    setPlayerName(event.target.value);
  }

  if(isEditing) {
    field = <input type="text" required value={playerName} onChange={handlePlayerName} />
  }

  return (
    <li className={isActive ? 'active' : undefined} >
      <span className="player">
        {field}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit} >{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
