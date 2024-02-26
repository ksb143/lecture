import PropTypes from 'prop-types'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export default function GameBoard({ onSelectSquare, turns }) {
  GameBoard.propTypes = {
    onSelectSquare: PropTypes.func.isRequired,
    turns: PropTypes.array.isRequired
  }

  let gameBoard = initialGameBoard

  for (const turn of turns) {
    const { square, player } = turn
    const { row, col } = square

    gameBoard[row][col] = player
  }

  // const [gameBoard, setGameBoard] = useState(initialGameBoard)

  // function handeSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updateBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray])
  //     ]
  //     updateBoard[rowIndex][colIndex] = activePlayerSymbol
  //     return updateBoard
  //   })

  //   onSelectSquare()
  // }

  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
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
