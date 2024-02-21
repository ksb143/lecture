import { useState } from 'react'

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false)

  function handleEditClick() {
    // 기존 상태 값을 그대로 받아서 사용
    // setIsEditing(!isEditing) // true로 업데이트
    // setIsEditing(!isEditing) // true로 업데이트
    // 늘 최신 상태 값을 받아서 사용
    setIsEditing((editing) => !editing)
  }

  function handleChange(event) {
    setPlayerName(event.target.value)
  }

  let editablePlayerName = <span className='player-name'>{playerName}</span>

  if (isEditing) {
    editablePlayerName = (
      <input type='text' required value={playerName} onChange={handleChange} />
    )
  }

  return (
    <li>
      <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}
