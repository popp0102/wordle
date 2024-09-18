import TileRow from './TileRow';
import { type HistoryEntry, guessToHistoryEntry } from '@util/HistoryEntry';

import './Wordle.css';

type BoardProps = {
  history: HistoryEntry[];
  currentGuess: string;
  wordLength: number;
  totalTurns: number;
  colorConfig: { [ key: string]: string };
};

export default function Board({ history, currentGuess, wordLength, totalTurns, colorConfig }: BoardProps) {
  const turn = history.length;
  const turnsLeft = totalTurns - turn;
  let emptyEntries: HistoryEntry[] = []
  let guessEntry: HistoryEntry[] = [];

  if (turnsLeft > 0) {
    emptyEntries = [...Array(turnsLeft - 1)].map(() => guessToHistoryEntry('', wordLength));
    guessEntry = [guessToHistoryEntry(currentGuess, wordLength)];
  }

  let board = [...history, ...guessEntry, ...emptyEntries];

  return (
    <div className="wordle-board">
      {
        board.map((entry, index) => {
          return (
            <TileRow key={index} entry={entry} colorConfig={colorConfig} />
          )
        })
      }
    </div>
  );
}

