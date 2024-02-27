import PropTypes from 'prop-types'

export default function GameOver({ winner, onRestart }) {
  GameOver.propTypes = {
    winner: PropTypes.string.isRequired,
    onRestart: PropTypes.func.isRequired
  }
  return (
    <div id='game-over'>
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It&apos;s a draw!</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  )
}
