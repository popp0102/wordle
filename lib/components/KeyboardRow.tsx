import './Wordle.css';

export type KeyboardButton = {
  letter: string;
  color: string;
  type: string;
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
          let classNames = `wordle-keyboard__key`;

          if (button.type === 'special') {
            classNames += ' wordle-keyboard__big_key';
          }

          return (
            <div
                data-testid={`wordle-keyboard-key-${letter}`}
                key={letter}
                onClick={onPush.bind(null, {key: letter})}
                className={classNames}
                style={{backgroundColor: color}}
            >
              {letter}
            </div>
          );
        })
      }
    </div>
  );
}

