import { type HistoryEntry, getLetterStatus } from '@util/HistoryEntry';
import KeyboardRow, { type KeyboardButton } from './KeyboardRow';

import './Wordle.css';

type KeyboardProps = {
  history: HistoryEntry[];
  onPush: ({ key }: { key: string }) => void;
  disable: boolean;
  colorConfig: { [ key: string]: string };
}

export default function Keyboard({ history, onPush, disable, colorConfig }: KeyboardProps) {
  let topRow    = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  let middleRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  let bottomRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  function findColor(letter: string) {
    let status = getLetterStatus(history, letter);
    return colorConfig[status];
  }

  let topButtons:    KeyboardButton[] = topRow.map((letter)    => ({ letter: letter, type: 'key', color: findColor(letter) }));
  let middleEntries: KeyboardButton[] = middleRow.map((letter) => ({ letter: letter, type: 'key', color: findColor(letter) }));
  let bottomEntries: KeyboardButton[] = bottomRow.map((letter) => ({ letter: letter, type: 'key', color: findColor(letter) }));
  let deleteKey = { letter: 'Backspace', type: 'special', color: colorConfig["neutral"] }
  let enterKey  = { letter: 'Enter',     type: 'special', color: colorConfig["neutral"] }
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

