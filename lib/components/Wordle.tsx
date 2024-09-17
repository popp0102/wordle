import { useEffect, useState } from 'react';

import { useWordle } from '../hooks/useWordle';
import Board from './Board';
import Keyboard from './Keyboard';

import './Wordle.css';

type WordleProps = {
  solution: string;
  onGameFinish: (didWin: boolean) => void;
  totalTurns: number;
};

export default function Wordle({ solution, onGameFinish, totalTurns }: WordleProps) {
  function handleGameEnd(didWin: boolean) {
    onGameFinish(didWin);
  }

  const { currentGuess, keyPushed, history, didPlayerWin, gameOver } = useWordle(solution, totalTurns, handleGameEnd);
  const [ openModal, setOpenModal ] = useState(false);

  useEffect(() => {
    if (!gameOver) {
      window.addEventListener('keyup', keyPushed);
    }
    return () => (window.removeEventListener('keyup', keyPushed))
  }, [keyPushed, gameOver]);

  return (
    <div className="wordle">
      <Board history={history} currentGuess={currentGuess} wordLength={solution.length} totalTurns={totalTurns} />
      <Keyboard history={history} onPush={keyPushed} disable={gameOver} />
    </div>
  );
}

