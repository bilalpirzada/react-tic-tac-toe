import { useState } from "react"

export default function Player({name, symbol, isActive, onChangeName}){
  const [playerName,setPlayerName] = useState(name);

 const [isEditing,setIsEditing] = useState(false);

  function handleClick()
  {
    setIsEditing(editing=>!editing);

    if(isEditing){
      onChangeName(symbol,playerName)
    }
  }

  function handleChange(event){
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ?'active':''}>
    <span className="player">
      {isEditing?<input type="text" required value={playerName} onChange={handleChange}/> : <span className="player-name">{playerName}</span>}
      <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleClick}>{isEditing ? 'Save':'Edit'}</button>
  </li>
  )
}