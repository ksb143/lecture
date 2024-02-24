import { useState } from 'react'
import PropTypes from 'prop-types'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  GameBoard.propTypes = {
    onSelectSquare: PropTypes.func.isRequired,
    activePlayerSymbol: PropTypes.string.isRequired
  }

  const [gameBoard, setGameBoard] = useState(initialGameBoard)

  function handeSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updateBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray])
      ]
      updateBoard[rowIndex][colIndex] = activePlayerSymbol
      return updateBoard
    })

    onSelectSquare()
  }

  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handeSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}
