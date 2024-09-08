import Row from './Row';

const WORD_LENGTH = 6;
const TURN_LENGTH = 8;

type HistoryEntry = {
  key: string;
  color: string;
}[];

type BoardProps = {
  history: HistoryEntry[];
  currentGuess: string;
};

export default function Board({ history, currentGuess }: BoardProps) {
  function stringToEntry(str: string) {
    const chars = [...str, ...Array(WORD_LENGTH - str.length)];
    const entry = chars.map((char) => ( { key: char || '', color: 'white' } ));
    return entry;
  }

  const turn = history.length;
  const turnsLeft = TURN_LENGTH - turn;
  let emptyEntries: HistoryEntry[] = []
  let guessEntry: HistoryEntry[] = [];

  if (turnsLeft > 0) {
    emptyEntries = [...Array(turnsLeft - 1)].map(() => stringToEntry(''));
    guessEntry = [stringToEntry(currentGuess)];
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

