import { useEffect, useState } from 'react';

import { useWordle } from '../hooks/useWordle';
import Board from './Board';
import Keyboard from './Keyboard';

type WordleProps = {
  solution: string;
};

export default function Wordle({ solution }: WordleProps) {
  function handleGameEnd() {
    setOpenModal(true);
  }

  function handleClose() {
    setOpenModal(false);
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

