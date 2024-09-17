import { useState } from 'react';
import { type HistoryEntry, transformToHistoryEntry, isHistoryEntryCorrect } from '../util/HistoryEntry';


export default function useWordle(solution: string, totalTurns: number, onGameEnd: (didWin: boolean) => void) {
  const [currentGuess, setCurrentGuess] = useState('');
  const [history, setHistory]           = useState<HistoryEntry[]>([]);
  const [didPlayerWin, setDidPlayerWin] = useState(false);
  const [gameOver, setGameOver]         = useState(false);

  function keyPushed({ key }: { key: string }) {
    if (currentGuess.length < solution.length && /^[a-zA-Z]$/.test(key)) {
      setCurrentGuess((prevGuess) => prevGuess + key.toUpperCase());
    } else if(key === 'Backspace') {
      setCurrentGuess((prevGuess) => prevGuess.slice(0, -1));
    } else if(key === 'Enter' && currentGuess.length === solution.length && history.length < totalTurns ) {
      const historyEntry = transformToHistoryEntry(currentGuess, solution);

      setHistory((prevHistory) => [...prevHistory, historyEntry]);
      setCurrentGuess('');

      const didWin = isHistoryEntryCorrect(historyEntry, solution.length);
      setDidPlayerWin(didWin);

      if (history.length === (totalTurns - 1) || didWin) {
        onGameEnd(didWin);
        setGameOver(true);
      }
    }
  }

  return {
    keyPushed: keyPushed,
    currentGuess: currentGuess,
    history: history,
    didPlayerWin: didPlayerWin,
    gameOver: gameOver
  }
}

export { useWordle };
