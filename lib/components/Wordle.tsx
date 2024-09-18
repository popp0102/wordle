import { useEffect, useState } from 'react';

import { useWordle } from '@hooks/useWordle';
import Board from './Board';
import Keyboard from './Keyboard';

import './Wordle.css';

type WordleProps = {
  solution: string;
  onGameFinish: (didWin: boolean) => void;
  totalTurns: number;
  colorConfig?: { [ key: string]: string };
};

const DEFAULT_COLOR_CONFIG: { [ key: string]: string } = {
  right: 'green',
  almost: 'yellow',
  wrong: 'gray',
  neutral: 'gainsboro',
  tile: 'white',
}

export default function Wordle({ solution, onGameFinish, totalTurns, colorConfig=DEFAULT_COLOR_CONFIG }: WordleProps) {
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
      <Board history={history} currentGuess={currentGuess} wordLength={solution.length} totalTurns={totalTurns} colorConfig={colorConfig}/>
      <Keyboard history={history} onPush={keyPushed} disable={gameOver} colorConfig={colorConfig} />
    </div>
  );
}

