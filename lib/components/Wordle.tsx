import { useEffect, useState } from 'react';

import { useWordle } from '../hooks/useWordle';
import Board from './Board';
import Keyboard from './Keyboard';

type WordleProps = {
  solution: string;
  onGameFinish: (didWin: boolean) => void;
};

export default function Wordle({ solution, onGameFinish }: WordleProps) {
  function handleGameEnd(didWin: boolean) {
    onGameFinish(didWin);
  }

  const { currentGuess, keyPushed, history, didPlayerWin, gameOver } = useWordle(solution, handleGameEnd);
  const [ openModal, setOpenModal ] = useState(false);

  useEffect(() => {
    if (!gameOver) {
      window.addEventListener('keyup', keyPushed);
    }
    return () => (window.removeEventListener('keyup', keyPushed))
  }, [keyPushed, gameOver]);

  return (
    <div className="wordle">
      <Board history={history} currentGuess={currentGuess} />
      <Keyboard history={history} onPush={keyPushed} gameOver={gameOver} />
    </div>
  );
}

