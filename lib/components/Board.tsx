import './Wordle.css';
import Row from './Row';
import { type HistoryEntry, guessToHistoryEntry } from '../util/HistoryEntry';

const WORD_LENGTH = 6;
const TURN_LENGTH = 8;

type BoardProps = {
  history: HistoryEntry[];
  currentGuess: string;
};

export default function Board({ history, currentGuess }: BoardProps) {
  const turn = history.length;
  const turnsLeft = TURN_LENGTH - turn;
  let emptyEntries: HistoryEntry[] = []
  let guessEntry: HistoryEntry[] = [];

  if (turnsLeft > 0) {
    emptyEntries = [...Array(turnsLeft - 1)].map(() => guessToHistoryEntry('', WORD_LENGTH));
    guessEntry = [guessToHistoryEntry(currentGuess, WORD_LENGTH)];
  }

  let board = [...history, ...guessEntry, ...emptyEntries];

  return (
    <div className="wordle-board">
      {
        board.map((entry, index) => {
          return (
            <Row key={index} entry={entry} />
          )
        })
      }
    </div>
  );
}

