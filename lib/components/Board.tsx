import './Wordle.css';
import TileRow from './TileRow';
import { type HistoryEntry, guessToHistoryEntry } from '../util/HistoryEntry';

const TURN_LENGTH = 8;

type BoardProps = {
  history: HistoryEntry[];
  currentGuess: string;
  wordLength: number;
};

export default function Board({ history, currentGuess, wordLength }: BoardProps) {
  const turn = history.length;
  const turnsLeft = TURN_LENGTH - turn;
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
            <TileRow key={index} entry={entry} />
          )
        })
      }
    </div>
  );
}

