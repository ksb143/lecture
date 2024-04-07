import { useState, useRef } from 'react';

export default function Player() {
  // 그냥 코드에서 결과를 읽고 싶을 때 사용
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id='player'>
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type='text' />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
