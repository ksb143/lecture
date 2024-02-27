import PropTypes from 'prop-types'

export default function GameBoard({ onSelectSquare, board }) {
  GameBoard.propTypes = {
    onSelectSquare: PropTypes.func.isRequired,
    board: PropTypes.array.isRequired
  }

  return (
    <ol id='game-board'>
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
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
