import { type HistoryEntry, getLetterStatus } from '../util/HistoryEntry';
import KeyboardRow, { type KeyboardButton } from './KeyboardRow';

import './Wordle.css';

type KeyboardProps = {
  history: HistoryEntry[];
  onPush: ({ key }: { key: string }) => void;
  disable: boolean;
}

const COLOR_MAP: { [ key: string]: string } = {
  right: 'green',
  almost: 'yellow',
  wrong: 'gray',
  neutral: 'gainsboro',
  tile: 'white',
}

export default function Keyboard({ history, onPush, disable }: KeyboardProps) {
  let topRow    = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  let middleRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  let bottomRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  function findColor(letter: string) {
    let status = getLetterStatus(history, letter);
    return COLOR_MAP[status];
  }

  let topButtons:    KeyboardButton[] = topRow.map((letter)    => ({ letter: letter, type: 'key', color: findColor(letter) }));
  let middleEntries: KeyboardButton[] = middleRow.map((letter) => ({ letter: letter, type: 'key', color: findColor(letter) }));
  let bottomEntries: KeyboardButton[] = bottomRow.map((letter) => ({ letter: letter, type: 'key', color: findColor(letter) }));
  let deleteKey = { letter: 'Backspace', type: 'special', color: COLOR_MAP["neutral"] }
  let enterKey  = { letter: 'Enter',     type: 'special', color: COLOR_MAP["neutral"] }
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

