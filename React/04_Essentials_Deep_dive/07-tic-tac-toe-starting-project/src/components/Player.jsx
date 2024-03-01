import { useState } from 'react'
import PropTypes from 'prop-types'

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName
}) {
  Player.propTypes = {
    initialName: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onChangeName: PropTypes.func.isRequired
  }

  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false)

  function handleEditClick() {
    // 기존 상태 값을 그대로 받아서 사용
    // setIsEditing(!isEditing) // true로 업데이트
    // setIsEditing(!isEditing) // true로 업데이트
    // 늘 최신 상태 값을 받아서 사용
    setIsEditing((editing) => !editing)
    if (isEditing) {
      onChangeName(symbol, playerName)
    }
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
    <li className={isActive ? 'active' : undefined}>
      <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}
