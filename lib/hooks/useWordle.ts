import { useState } from 'react';

const WORD_LENGTH = 6;
const TURN_LENGTH = 8;

type HistoryEntry = {
  key: string;
  color: string;
}[];

export default function useWordle(solution: string, onGameEnd: (didWin: boolean) => void) {
  const [currentGuess, setCurrentGuess] = useState('');
  const [history, setHistory]           = useState<HistoryEntry[]>([]);
  const [didPlayerWin, setDidPlayerWin] = useState(false);
  const [gameOver, setGameOver]         = useState(false);

  function transformToHistoryEntry(guess: string): HistoryEntry {
    const solutionChars: string[] = [...solution].map((char) => char.toUpperCase());

    let historyEntry: HistoryEntry = [];
    [...guess].forEach((char, index) => {
      let color = 'gray';
      if (char === solutionChars[index]) {
        color = 'green';
        solutionChars[index] = "";
      }

      historyEntry.push({key: char, color: color});
    });

    [...guess].forEach((char, index) => {
      if(solutionChars[index]) {
        const containsIndex = solutionChars.indexOf(char);
        historyEntry[index].color = (containsIndex !== -1) ? 'yellow' : 'gray';
      }
    });

    return historyEntry;
  }

  function isCorrect(historyEntry: HistoryEntry) {
    return (historyEntry.filter((x) => x.color === 'green') || []).length === WORD_LENGTH;
  }

  function keyPushed({ key }: { key: string }) {
    if (currentGuess.length < WORD_LENGTH && /^[a-zA-Z]$/.test(key)) {
      setCurrentGuess((prevGuess) => prevGuess + key.toUpperCase());
    } else if(key === 'Backspace') {
      setCurrentGuess((prevGuess) => prevGuess.slice(0, -1));
    } else if(key === 'Enter' && currentGuess.length === WORD_LENGTH && history.length < TURN_LENGTH ) {
      const historyEntry = transformToHistoryEntry(currentGuess);

      setHistory((prevHistory) => [...prevHistory, historyEntry]);
      setCurrentGuess('');

      const didWin = isCorrect(historyEntry);
      setDidPlayerWin(didWin);

      if (history.length === (TURN_LENGTH - 1) || didWin) {
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
