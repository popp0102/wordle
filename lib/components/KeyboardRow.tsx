import './Wordle.css';

export type KeyboardButton = {
  letter: string;
  color?: string;
  value?: string;
};

type KeyboardRowProps = {
  buttons: KeyboardButton[],
  onPush: ({ key }: { key: string }) => void
};

export default function KeyboardRow({ buttons, onPush }: KeyboardRowProps) {
  return (
    <div className="wordle-keyboard__row">
      {
        buttons.map((button) => {
          const letter   = button.letter;
          const color    = button.color;
          let pushValue  = button.value || letter;
          let classNames = `wordle-keyboard__key wordle-keyboard__key__${color}`;
          if (button.value) {
            classNames += ' wordle-keyboard__big_key';
          }

          return (
            <div data-testid={`wordle-keyboard-key-${letter}`} key={letter} onClick={onPush.bind(null, {key: pushValue})} className={classNames}>
              {letter}
            </div>
          );
        })
      }
    </div>
  );
}

