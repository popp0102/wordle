import { type HistoryEntry } from '../util/HistoryEntry';
import KeyboardRow, { type KeyboardButton } from './KeyboardRow';

import './Wordle.css';

type KeyboardProps = {
  history: HistoryEntry[];
  onPush: ({ key }: { key: string }) => void;
  disable: boolean;
}

export default function Keyboard({ history, onPush, disable }: KeyboardProps) {
  let topRow    = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  let middleRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  let bottomRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  function findColor(letter: string) {
    let color = 'gainsboro';

    history.forEach((historyEntry) => {
      historyEntry.forEach((entry) => {
        if (entry.key === letter) {
          if (entry.color === 'green') {
            color = 'green';
          } else if (entry.color === 'yellow' && color !== 'green') {
            color = 'yellow';
          } else if (entry.color === 'gray' && color !== 'green' && color !== 'yellow') {
            color = 'gray';
          }
        }
      });
    });

    return color;
  }

  let topButtons:    KeyboardButton[] = topRow.map((letter)    => ({ letter: letter, type: 'key', color: findColor(letter) }));
  let middleEntries: KeyboardButton[] = middleRow.map((letter) => ({ letter: letter, type: 'key', color: findColor(letter) }));
  let bottomEntries: KeyboardButton[] = bottomRow.map((letter) => ({ letter: letter, type: 'key', color: findColor(letter) }));
  let deleteKey = { letter: 'Backspace', type: 'Big', color: 'gainsboro' }
  let enterKey  = { letter: 'Enter',     type: 'Big', color: 'gainsboro' }
  bottomEntries = [enterKey, ...bottomEntries, deleteKey];

  const onPushHandler = disable ? ()=>{} : onPush;
  return (
    <div className="wordle-keyboard">
      <KeyboardRow buttons={topButtons} onPush={onPushHandler} />
      <KeyboardRow buttons={middleEntries} onPush={onPushHandler} />
      <KeyboardRow buttons={bottomEntries} onPush={onPushHandler} />
    </div>
  );
}
